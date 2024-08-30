const addMemberBtn = document.getElementById('addMemberBtn');
const teamList = document.getElementById('teamList');
const listItem = document.createElement('li');
listItem.textContent = "kfg@email.com";
teamList.appendChild(listItem);
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