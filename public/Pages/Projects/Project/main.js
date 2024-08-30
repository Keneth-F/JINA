import { GetProjects } from "../../../data/index.js";
import { createCard } from "../components/card.js";
import { createColumn } from "../components/column.js";

const projects = await GetProjects()
const project = projects.find((project) => project.id == new URLSearchParams(location.search).get("id"))
let columns = project.columns

document.querySelector("#main").className += project.bgColor
document.querySelector("#board-title").textContent = project.title
document.querySelector("[name='stage']").append(...columns.map(({ title, id }) => {
    const option = document.createElement("option")
    option.value = id
    option.textContent = title
    return option
}))

const addMemberBtn = document.getElementById('addMemberBtn');
const teamList = document.getElementById('teamList');
addMemberBtn.addEventListener('click', () => {
    const input = document.querySelector('input[name="teamMember"]');
    const email = input.value.trim();

    if (email) {
        const listItem = document.createElement('li');
        listItem.textContent = email;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'ml-2 text-red-500';
        removeBtn.type = 'button';

        removeBtn.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(removeBtn);
        teamList.appendChild(listItem);

        input.value = ''; // Clear the input field
    }
});

const board = document.querySelector('#board-container')
board.append(...columns.sort((a, b) => a.order - b.order).map(({ id, cards, title }) => {
    const { column, cardContainer, addButton, countSpan } = createColumn({ title, count: cards.length, id });
    addButton.addEventListener('click', (e) => {
        const modal = document.querySelector('#modal-create-ticket')
        modal.querySelector("[name='stage']").value = id
        modal.showModal()
    })
    Sortable.create(cardContainer, {
        group: "shared",
        animation: 150,
        dataIdAttr: title,
        onAdd: function (evt) {
            const ticket = columns.reduce((acc, col) => col.cards.find((t) => t.id == evt.item.dataset.id) ?? acc, null)
            cards.push(ticket)
            countSpan.textContent = cards.length
        },
        onRemove: function (evt) {
            const ticket = cards.find((t) => t.id == evt.item.dataset.id)
            cards = cards.filter((t) => t != ticket)
            countSpan.textContent = cards.length
        },

    });
    cardContainer.append(...cards.sort((a, b) => a.order - b.order).map(({ attachments, comments, date, label, team, title, id }, i) => {
        const { card, button } = createCard({ label, title, date, comments, attachments, team, id })
        button.addEventListener("click", (e) => {
            console.log(cards)
            cards.pop()
            countSpan.textContent = cards.length
            console.log(title, '->', cards.length)
            card.remove()
        })
        return card
    }));
    return column
}));
Sortable.create(board, {
    animation: 150
})