import { GetColumns } from "../../../data/index.js";
import { createCard } from "../components/card.js";
import { createColumn } from "../components/column.js";

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

const columns = await GetColumns()
document.querySelector("[name='stage']").append(...columns.map(({ title }) => {
    const option = document.createElement("option")
    option.value = title
    option.textContent = title
    return option
}))
const board = document.querySelector('#board-container')
board.append(...columns.map(({ title, tickets }) => {
    const { column, cardContainer, addButton, countSpan } = createColumn({ title, count: tickets.length });
    addButton.addEventListener('click', (e) => {
        const modal = document.querySelector('#modal-create-ticket')
        modal.querySelector("[name='stage']").value = title
        modal.showModal()
    })
    Sortable.create(cardContainer, {
        group: "shared",
        animation: 150,
        dataIdAttr: title,
        onAdd: function (evt) {
            tickets.push(evt.item.dataset.id)
            countSpan.textContent = tickets.length
        },
        onRemove: function (evt) {
            tickets.pop()
            countSpan.textContent = tickets.length
            console.log(title, '->', tickets)
        },

    });
    cardContainer.append(...tickets.map(({ attachments, comments, date, label, team, title }) => {
        const { card, button } = createCard({ label, title, date, comments, attachments, team })
        button.addEventListener("click", (e) => {
            tickets.pop()
            countSpan.textContent = tickets.length
            console.log(title, '->', tickets)
            card.remove()
        })
        return card
    }));
    return column
}));
Sortable.create(board, {
    animation: 150
})