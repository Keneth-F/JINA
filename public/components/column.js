export function createColumn({ title, id }) {
    const column = document.createElement('div');
    column.className = 'flex flex-col flex-shrink-0 w-72';
    column.setAttribute("data-column-id", id)

    const header = document.createElement('div');
    header.className = 'flex items-center justify-between flex-shrink-0 h-10 px-2';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'block text-sm font-semibold';
    titleSpan.textContent = title;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'flex items-center justify-center w-6 h-6 text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100';

    const trashIcon = document.createElement('i');
    trashIcon.className = 'bx bxs-trash';

    const addButton = document.createElement('button');
    addButton.className = 'flex items-center justify-center w-6 h-6 text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100';

    const icon = document.createElement('i');
    icon.className = 'bx bx-plus';

    deleteButton.appendChild(trashIcon);
    addButton.appendChild(icon);
    header.appendChild(addButton);
    header.appendChild(titleSpan);
    header.appendChild(deleteButton);
    column.appendChild(header);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'flex flex-col pb-2 overflow-auto h-full';
    cardContainer.id = `${title}-${id}`

    column.appendChild(cardContainer);

    return { column, cardContainer, addButton, deleteButton };
}
