export function createColumn({ title, count }) {
    const column = document.createElement('div');
    column.className = 'flex flex-col flex-shrink-0 w-72';

    const header = document.createElement('div');
    header.className = 'flex items-center flex-shrink-0 h-10 px-2';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'block text-sm font-semibold';
    titleSpan.textContent = title;

    const countSpan = document.createElement('span');
    countSpan.className = 'flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30';
    countSpan.textContent = count;

    const addButton = document.createElement('button');
    addButton.className = 'flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100';
    addButton.innerHTML = `
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
  `;

    header.appendChild(titleSpan);
    header.appendChild(countSpan);
    header.appendChild(addButton);
    column.appendChild(header);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'flex flex-col pb-2 overflow-auto min-h-full';

    column.appendChild(cardContainer);

    return { column, cardContainer, addButton, countSpan };
}
