export function createCard({ label, title, date, comments, attachments, team }) {
    function createTeamAvatars(team) {
        const avatarGroup = document.createElement('div');
        avatarGroup.className = 'avatar-group -space-x-4 rtl:space-x-reverse';

        const maxVisibleAvatars = 5; // Número máximo de avatares visibles
        const remainingAvatars = team.length - maxVisibleAvatars;

        team.slice(0, maxVisibleAvatars).forEach(member => {
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'avatar';

            const avatarInnerDiv = document.createElement('div');
            avatarInnerDiv.className = 'size-6';

            const img = document.createElement('img');
            img.src = member.avatar;

            avatarInnerDiv.appendChild(img);
            avatarDiv.appendChild(avatarInnerDiv);
            avatarGroup.appendChild(avatarDiv);
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
    const card = document.createElement('div');
    card.draggable = true;
    card.setAttribute("data-id", title)
    card.className = 'relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100';

    const button = document.createElement('button');
    button.className = 'absolute top-0 right-0 flex items-center justify-center text-2xl mt-4 mr-2 text-gray-500 rounded hover:text-red-700 group-hover:flex';
    button.innerHTML = `<i class='bx bxs-x-circle' ></i>`;
    card.appendChild(button);

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

    const dateDiv = document.createElement('div');
    dateDiv.className = 'flex items-center';
    dateDiv.innerHTML = `
      <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
      </svg>
      <span class="ml-1 leading-none">${date}</span>
  `;
    detailsDiv.appendChild(dateDiv);

    const commentsDiv = document.createElement('div');
    commentsDiv.className = 'relative flex items-center ml-4';
    commentsDiv.innerHTML = `
      <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
      </svg>
      <span class="ml-1 leading-none">${comments}</span>
  `;
    detailsDiv.appendChild(commentsDiv);

    const attachmentsDiv = document.createElement('div');
    attachmentsDiv.className = 'flex items-center ml-4';
    attachmentsDiv.innerHTML = `
      <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
      </svg>
      <span class="ml-1 leading-none">${attachments}</span>
  `;
    detailsDiv.appendChild(attachmentsDiv);

    const avatarGroup = createTeamAvatars(team);
    detailsDiv.appendChild(avatarGroup);

    card.appendChild(detailsDiv);


    card.setAttribute('draggable', true);

    return { card, button };
}
