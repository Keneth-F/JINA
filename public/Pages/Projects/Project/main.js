import { createCard } from "../../../components/card.js";
import { createColumn } from "../../../components/column.js";
import { createColumnButton } from "../../../components/createColumn.js";
import { fetchSessionStatus } from "../../../data/auth.data.js";
import { upsertCard } from "../../../data/cards.data.js";
import { deleteColumn, insertColumn } from "../../../data/columns.data.js";
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
$board.append($createColumn.container)

//TODO board.insertBefore(column, BtnCreateColumnContainer)

document.querySelector("#main").className += project.bgColor;
document.querySelector("#board-title").textContent = project.title;

$modal.addEventListener("close", (event) => { $form.reset() });
$form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const currentColumn = project.scenes.find((column) => column.id == data.stage)
    data.team = [...$team].map(li => ({ avatar: li.textContent }))
    data.order = currentColumn.tickets.length
    const newCard = await upsertCard(data)
    currentColumn.tickets.push(newCard)
    const $column = document.querySelector(`[data-column-id="${currentColumn.id}"]`);
    const $cardContainer = $column.querySelector(`#${currentColumn.title}-${currentColumn.id}`)
    const $existingCard = document.querySelector(`[data-id="${newCard.id}"]`);
    const $newCard = createCardElement(newCard);
    console.log({ newCard, currentColumn, $column, $existingCard, $newCard })
    if ($existingCard) {
        $cardContainer.replaceChild($newCard, $existingCard);
        //TODO replace
    } else {
        $cardContainer.append($newCard);
        //TODO add
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
        const column = await insertColumn({ title: $input.value, order: project.scenes.length })
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
function createColumnElement(column) {
    const option = document.createElement("option");
    option.value = column.id;
    option.textContent = column.title;
    stagesSelect.append(option)

    const $column = createColumn(column)
    $column.deleteButton.addEventListener("click", async (evt) => {
        const currentColumn = project.scenes.find((column) => column.id == id)
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

    const onDeleteCard = async (cardId) => {
        const previousColumn = project.scenes.find((column) => column.tickets.find((card) => card.id == cardId && column.id == id)) ?? project.scenes.find((column) => column.tickets.find((card) => card.id == cardId))
        const card = previousColumn.tickets.find((card) => card.id == cardId)
        previousColumn.tickets = previousColumn.tickets.filter((_card) => _card.id != card.id)
        //TODO UPDATE FROM SERVER
    }

    const onDroppedCard = (evt) => {
        const previousColumn = project.scenes.find((column) => column.tickets.find((card) => card.id == evt.item.dataset.id))
        const card = previousColumn.tickets.find((card) => card.id == evt.item.dataset.id)
        const currentColumn = project.scenes.find((column) => column.id == id)
        currentColumn.tickets.push(card)
        //TODO UPDATE FROM SERVER
    }
    $column.cardContainer.append(...column.tickets.sort((a, b) => a.order - b.order).map(createCardElement))

    Sortable.create($column.cardContainer, {
        group: "shared", animation: 150, onAdd: onDroppedCard, onRemove: (evt) => onDeleteCard(evt.item.dataset.id)
    })

    return $column.column
}

function createCardElement(card) {
    const $card = createCard(card)
    $card.button.addEventListener("click", (e) => {
        //TODO onDelete(id)

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
