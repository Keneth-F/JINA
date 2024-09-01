import { createCard } from "../../../components/card.js";
import { createColumn } from "../../../components/column.js";
import { createColumnButton } from "../../../components/createColumn.js";
import { fetchSessionStatus } from "../../../data/auth.data.js";
import { deleteCard, upsertCard } from "../../../data/cards.data.js";
import { deleteColumn, upsertColumn } from "../../../data/columns.data.js";
import { getProjectById } from "../../../data/projects.data.js"

const { isAuthenticated, message } = await fetchSessionStatus()
const user = JSON.parse(message)
if (!isAuthenticated) {
    window.location.assign('/pages/sign-in');
}
const projectId = new URLSearchParams(location.search).get("id");
const project = await getProjectById(projectId)
try {

} catch (error) {
    alert(`Error: ${error.message}`);
}
const $modal = document.querySelector('#modal-ticket')
const $form = $modal.querySelector("#ticket-form")
const $team = $modal.querySelectorAll("li")
const $board = document.querySelector('#board-container')
Sortable.create($board, { animation: 150, draggable: "[data-column-id]" })
const $createColumn = createColumnButton()
const stagesSelect = document.querySelector("[name='stage']")
const addMemberBtn = document.getElementById('addMemberBtn');
const $teamList = document.getElementById('teamList');
const $listItem = document.createElement('li');
$listItem.textContent = user.email;
$teamList.appendChild($listItem);
addMemberBtn.addEventListener('click', () => {
    const $input = document.querySelector('input[name="teamMember"]');
    const email = $input.value.trim();

    if (email) {
        const $listItem = document.createElement('li');
        $listItem.textContent = email;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'ml-2 text-red-500';
        removeBtn.type = 'button';

        removeBtn.addEventListener('click', () => {
            $listItem.remove();
        });

        $listItem.appendChild(removeBtn);
        $teamList.appendChild(l$istItem);

        $input.value = ''; // Clear the input field
    }
});

document.querySelector("#main").className += project.bgColor;
document.querySelector("#board-title").textContent = project.title;

$modal.addEventListener("close", (event) => { $form.reset() });
$form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const currentColumn = project.scenes.find((column) => column.id == data.stage)
    data.team = [...$team].map(li => ({ email: li.textContent }))
    data.order = currentColumn.tickets.length
    const newCard = await upsertCard(data)
    const $column = document.querySelector(`[data-column-id="${currentColumn.id}"]`);
    const $cardContainer = $column.querySelector(`#${currentColumn.title}-${currentColumn.id}`)
    const $existingCard = document.querySelector(`[data-id="${newCard.id}"]`);
    const $newCard = createCardElement(newCard);
    if ($existingCard) {
        $cardContainer.replaceChild($newCard, $existingCard);
        currentColumn.tickets.map((ticket) => {
            if (ticket.id == newCard.id) return newCard
            return ticket
        })
    } else {
        $cardContainer.append($newCard);
        currentColumn.tickets.push(newCard)
    }
    $modal.close()
})

$createColumn.button.addEventListener("click", (event) => {
    const $inputContainer = document.createElement('div');
    $inputContainer.className = 'flex flex-col flex-shrink-0 w-72';
    const $input = document.createElement('input');
    $input.type = 'text';
    $input.className = 'w-full h-10 text-sm font-semibold rounded border border-indigo-500 px-3';
    $inputContainer.append($input)
    $board.insertBefore($inputContainer, $createColumn.container);
    $input.focus();
    $input.addEventListener('blur', async (e) => {
        const column = await upsertColumn({ title: $input.value, order: project.scenes.length, id: -1 })
        const $column = createColumnElement(column)
        project.scenes.push(column)
        $board.insertBefore($column, $createColumn.container)
        $inputContainer.remove()
    });
    $input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            $input.blur()
        }
    });
})
$board.append(...project.scenes.sort((a, b) => a.order - b.order).map(createColumnElement))
$board.append($createColumn.container)

function createColumnElement(column) {
    const option = document.createElement("option");
    option.value = column.id;
    option.textContent = column.title;
    stagesSelect.append(option)

    const $column = createColumn(column)
    $column.deleteButton.addEventListener("click", async (evt) => {
        const currentColumn = project.scenes.find((column) => column.id == column.id)
        project.scenes = project.scenes.filter((_column) => _column.id != currentColumn.id)
        try {
            await deleteColumn(column.id)
            $column.column.remove()
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    })

    $column.addButton.addEventListener('click', () => {
        stagesSelect.value = column.id
        $modal.showModal()
    })


    const onDroppedCard = async (evt) => {
        const destinationColumn = project.scenes.find((_column) => _column.id == column.id)
        const sourceColumn = project.scenes.find((column) => column.tickets.find((card) => card.id == evt.item.dataset.id))
        const card = sourceColumn.tickets.find((card) => card.id == evt.item.dataset.id)
        try {
            await upsertCard(card)
            sourceColumn.tickets = sourceColumn.tickets.filter((_card) => _card.id != card.id)
            destinationColumn.tickets = destinationColumn.tickets.concat(card)
        } catch (error) {
            alert(error.message)
        }
    }
    $column.cardContainer.append(...column.tickets.sort((a, b) => a.order - b.order).map(createCardElement))

    Sortable.create($column.cardContainer, {
        group: "shared", animation: 150, onAdd: onDroppedCard
    })

    return $column.column
}

function createCardElement(card) {
    const $card = createCard(card)
    $card.btnDelete.addEventListener("click", async (e) => {
        try {
            await deleteCard(card.id)
            const sourceColumn = project.scenes.find((column) => column.tickets.find((_card) => _card.id == card.id))
            sourceColumn.tickets = sourceColumn.tickets.filter((_card) => _card.id != card.id)
            $card.card.remove()
        } catch (error) {
            alert(error.message)
        }
    })

    return $card.card

}




// modal.querySelector("#ticket-form").addEventListener("submit", async (event) => {
//     event.preventDefault()
//     const tmp = { ...Object.fromEntries(new FormData(event.target)) }
//     const currentColumn = project.scenes.find((column) => column.id == tmp.stage)
//     const team = [...modal.querySelectorAll("li")].map(li => ({ avatar: li.textContent }))
//     const card = await InsertCard({ ...tmp, team, order: currentColumn.cards.length })
//     currentColumn.cards.push(card)
//     cardContainer.append(populateCardData(card, () => onDeleteCard(card.id)))
//     modal.close()
// })
