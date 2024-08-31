import { InsertCard, InsertColumn } from "../../../data/index.js";
import { createCard } from "../components/card.js";
import { createColumn } from "../components/column.js";
import { createColumnButton } from "../components/createColumn.js";
import './addTicketForm.js'
import { getCurrentProject } from "./getCurrentProject.js";

const { project, user } = await getCurrentProject()

const modal = document.querySelector('#modal-create-ticket')
const board = document.querySelector('#board-container')
const { button: BtnCreateColumn, container: BtnCreateColumnContainer } = createColumnButton()
BtnCreateColumn.addEventListener("click", onAddColumn)
board.append(BtnCreateColumnContainer)
initializeBoard()

function initializeBoard() {
    Sortable.create(board, { animation: 150, draggable: "[data-column-id]" })
    document.querySelector("#main").className += project.bgColor;
    document.querySelector("#board-title").textContent = project.title;
    const orderedColumns = project.columns.sort((a, b) => a.order - b.order)
    orderedColumns.forEach(populateColumnData);
}

function populateColumnData({ id, title, cards }) {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = title;
    document.querySelector("[name='stage']").append(option)

    const { column, cardContainer, addButton, deleteButton } = createColumn({ title, id })

    deleteButton.addEventListener("click", (evt) => {
        const currentColumn = project.columns.find((column) => column.id == id)
        project.columns = project.columns.filter((_column) => _column.id != currentColumn.id)
        console.log(project.columns)
        column.remove()
    })

    const onDeleteCard = (cardId) => {
        const previousColumn = project.columns.find((column) => column.cards.find((card) => card.id == cardId && column.id == id)) ?? project.columns.find((column) => column.cards.find((card) => card.id == cardId))
        const card = previousColumn.cards.find((card) => card.id == cardId)
        previousColumn.cards = previousColumn.cards.filter((_card) => _card.id != card.id)
    }



    const onDroppedCard = (evt) => {
        const previousColumn = project.columns.find((column) => column.cards.find((card) => card.id == evt.item.dataset.id))
        const card = previousColumn.cards.find((card) => card.id == evt.item.dataset.id)
        const currentColumn = project.columns.find((column) => column.id == id)
        currentColumn.cards.push(card)
    }

    Sortable.create(cardContainer, {
        group: "shared", animation: 150, onAdd: onDroppedCard, onRemove: (evt) => onDeleteCard(evt.item.dataset.id)
    })

    const orderedCards = cards.sort((a, b) => a.order - b.order)
    orderedCards.forEach((card) => cardContainer.append(populateCardData(card, onDeleteCard)))

    addButton.addEventListener('click', () => {
        modal.querySelector("[name='stage']").value = id
        modal.showModal()
        modal.querySelector("#ticket-form").onsubmit = async (event) => {
            event.preventDefault()
            const tmp = { ...Object.fromEntries(new FormData(event.target)) }
            const currentColumn = project.columns.find((column) => column.id == tmp.stage)
            const team = [...modal.querySelectorAll("li")].map(li => ({ avatar: li.textContent }))
            const card = await InsertCard({ ...tmp, team, order: currentColumn.cards.length })
            currentColumn.cards.push(card)
            cardContainer.append(populateCardData(card, () => onDeleteCard(card.id)))
            modal.close()
        }
    })
    board.insertBefore(column, BtnCreateColumnContainer)
}
function populateCardData({ attachments, comments, date, label, team, title, id }, onDelete) {
    const { card, button: DeleteBtn } = createCard({ label, title, date, comments, attachments, team, id })
    DeleteBtn.addEventListener("click", (e) => {
        onDelete(id)
        card.remove()
    })
    card.addEventListener("click", () => {
        document.querySelector("#modal-update-ticket").showModal()
    })
    return card
}

function onAddColumn() {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex flex-col flex-shrink-0 w-72';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'w-full h-10 text-sm font-semibold rounded border border-indigo-500 px-3';
    inputContainer.append(input)
    board.insertBefore(inputContainer, BtnCreateColumnContainer);
    input.focus();
    input.addEventListener('blur', async (e) => {
        const column = await InsertColumn({ title: input.value, order: project.columns.length })
        project.columns.push(column)
        inputContainer.remove()
        populateColumnData(column)
    });
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            input.blur()
        }
    });
}


// modal.querySelector("#ticket-form").addEventListener("submit", async (event) => {
//     event.preventDefault()
//     const tmp = { ...Object.fromEntries(new FormData(event.target)) }
//     const currentColumn = project.columns.find((column) => column.id == tmp.stage)
//     const team = [...modal.querySelectorAll("li")].map(li => ({ avatar: li.textContent }))
//     const card = await InsertCard({ ...tmp, team, order: currentColumn.cards.length })
//     currentColumn.cards.push(card)
//     cardContainer.append(populateCardData(card, () => onDeleteCard(card.id)))
//     modal.close()
// })
