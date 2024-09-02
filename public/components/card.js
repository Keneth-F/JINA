function createTeamAvatars(team) {
    const avatarGroup = document.createElement('div');
    avatarGroup.className = 'avatar-group -space-x-4 rtl:space-x-reverse';

    const maxVisibleAvatars = 5; // Número máximo de avatares visibles
    const remainingAvatars = team.length - maxVisibleAvatars;

    team.slice(0, maxVisibleAvatars).forEach(member => {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'avatar placeholder';

        const placeholderInnerDiv = document.createElement('div');
        placeholderInnerDiv.className = 'bg-neutral text-neutral-content size-6';

        const span = document.createElement('span');
        span.textContent = member.email.slice(0, 2);

        placeholderInnerDiv.appendChild(span);
        placeholderDiv.appendChild(placeholderInnerDiv);
        avatarGroup.appendChild(placeholderDiv)
    });

    if (remainingAvatars > 0) {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'avatar placeholder';

        const placeholderInnerDiv = document.createElement('div');
        placeholderInnerDiv.className = 'bg-neutral text-neutral-content size-6';

        const span = document.createElement('span');
        span.textContent = `+${remainingAvatars > 99 ? '99' : remainingAvatars}`;

        placeholderInnerDiv.appendChild(span);
        placeholderDiv.appendChild(placeholderInnerDiv);
        avatarGroup.appendChild(placeholderDiv);
    }

    return avatarGroup;
}

export function createCard({ label, title, date, comments, attachments, team, id }) {

    const card = document.createElement('div');
    card.draggable = true;
    card.setAttribute("data-id", id);
    card.className = 'relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100';

    // Reemplazando el botón con el dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown dropdown-end absolute top-0 right-0 flex items-center justify-center text-2xl mt-4 mr-2 text-gray-500 rounded hover:text-red-700 group-hover:flex';

    const dropdownButton = document.createElement('div');
    dropdownButton.className = 'btn btn-xs btn-ghost rounded-btn';
    dropdownButton.setAttribute('tabindex', '0');
    dropdownButton.setAttribute('role', 'button');
    dropdownButton.innerHTML = '<i class="bx bx-dots-vertical-rounded" ></i>';

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'menu dropdown-content bg-base-100 rounded-md z-[1] mt-4 shadow';
    dropdownMenu.setAttribute('tabindex', '0');

    // Crear ítems del dropdown de manera iterativa
    const actions = [
        { text: 'Edit' },
        { text: 'Delete' },
    ].map(item => {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        span.className = "text-xs px-2 py-1"
        span.textContent = item.text;
        listItem.appendChild(span);
        return listItem
    });
    dropdownMenu.append(...actions);
    dropdown.appendChild(dropdownButton);
    dropdown.appendChild(dropdownMenu);

    card.appendChild(dropdown);

    const labelSpan = document.createElement('span');
    labelSpan.className = 'flex items-center h-6 px-3 text-xs font-semibold rounded-full ' + label.bgColor;
    labelSpan.textContent = label.text;
    card.appendChild(labelSpan);

    const titleElement = document.createElement('h4');
    titleElement.className = 'mt-3 text-sm font-medium';
    titleElement.textContent = title;
    card.appendChild(titleElement);

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'flex items-center w-full mt-3 text-xs font-medium text-gray-400';

    const avatarGroup = createTeamAvatars(team);
    detailsDiv.appendChild(avatarGroup);

    card.appendChild(detailsDiv);

    return { card, btnEdit: actions[0], btnDelete: actions[1], dropdown, labelSpan, titleElement };
}
