import { GetColumns } from "../../data/index.js";
import { createCard } from "./components/card.js";
import { createColumn } from "./components/column.js";

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
document.querySelector("#board-container").append(...columns.map(({ title, tickets }) => {
    const { column, cardContainer } = createColumn({ title, count: tickets.length });


    cardContainer.append(...tickets.map(({ attachments, comments, date, label, team, title }) => createCard({
        label,
        title,
        date,
        comments,
        attachments,
        team
    })));
    return column
}));