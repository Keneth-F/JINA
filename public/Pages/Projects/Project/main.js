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

let columns = await GetColumns()
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
            const ticket = columns.reduce((acc, col, i) => col.tickets.find((t, i) => `${col.title}-${i}-${t.title}` == evt.item.dataset.id) ?? acc, null)
            console.log(ticket)
            columns = columns.map((col) => col = col.tickets.filter((t, i) => ticket != ticket))
            evt.item.dataset.id = `${title}-${tickets.length}-${ticket.title}`
            tickets.push(ticket)
            countSpan.textContent = tickets.length
        },
        onRemove: function (evt) {
            const ticket = tickets.find((t, i) => `${column.title}-${i}-${t.title}` == evt.item.dataset.id)
            console.log(evt.item.dataset.id)
            console.log(ticket)
            tickets = tickets.filter((t) => t != ticket)
            countSpan.textContent = tickets.length
        },

    });
    cardContainer.append(...tickets.map(({ attachments, comments, date, label, team, title: cTitle }, i) => {
        const { card, button } = createCard({ label, title: `${title}-${i}-${cTitle}`, date, comments, attachments, team })
        button.addEventListener("click", (e) => {
            console.log(tickets)
            tickets.pop()
            countSpan.textContent = tickets.length
            console.log(title, '->', tickets.length)
            card.remove()
        })
        return card
    }));
    return column
}));
Sortable.create(board, {
    animation: 150
})