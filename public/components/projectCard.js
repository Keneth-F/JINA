export function createProjectCard({ title, description, id, bgColor }) {
  const box = document.createElement('div');
  box.className = `card text-neutral-content ${bgColor}`;
  box.setAttribute('data-id', id)

  const cardBody = document.createElement('div');
  cardBody.className = "card-body items-center justify-between text-center";

  const cardTitle = document.createElement('h3');
  cardTitle.className = "card-title text-black";
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  const cardActions = document.createElement('div');
  cardActions.className = "card-actions justify-end";

  const goButton = document.createElement('a');
  goButton.className = "btn btn-sm btn-primary";
  goButton.innerHTML = "<i class='bx bx-link-external' ></i>";


  const editButton = document.createElement('button');
  editButton.className = "btn btn-sm btn-warning";
  editButton.innerHTML = "<i class='bx bxs-edit' ></i>";

  const deleteButton = document.createElement('button');
  deleteButton.className = "btn btn-sm btn-ghost text-black";
  deleteButton.innerHTML = "<i class='bx bxs-trash' ></i>";


  cardActions.appendChild(goButton);
  cardActions.appendChild(editButton);
  cardActions.appendChild(deleteButton);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardActions);

  box.appendChild(cardBody);

  return { box, goButton, editButton, deleteButton };
}
