documents:defineTable({
title:v.string(),
userId:v.string(),
isArchived:v.boolean(),
parentDocument:v.optional(v.id('documents')),
content:v.optional(v.string()),
coverImage:v.optional(v.string()),
icon:v.optional(v.string()),
isPublished:v.boolean()
})

model Board {
id String @id @default(uuid())
orgId String
title String
imageId String
imageThumbUrl String @db.Text
imageFullUrl String @db.Text
imageUsername String @db.Text
imageLinkHTML String @db.Text

lists List[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model List {
id String @id @default(uuid())
title String
order Int

boardId String
board Board @relation(fields: [boardId], references: [id], onDelete: Cascade)

cards Card[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([boardId])
}

model Card {
id String @id @default(uuid())
title String
order Int
description String? @db.Text

listId String
list List @relation(fields: [listId], references: [id], onDelete: Cascade)

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([listId])
}

enum ACTION {
CREATE
UPDATE
DELETE
}

enum ENTITY_TYPE {
BOARD
LIST
CARD
}

model AuditLog {
id String @id @default(uuid())
orgId String
action ACTION
entityId String
entityType ENTITY_TYPE
entityTitle String
userId String
userImage String @db.Text
userName String @db.Text

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

 <!-- <div id="accordion-example">
    <h2 id="accordion-example-heading-1">
      <button type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100"
        aria-expanded="true" aria-controls="accordion-example-body-1">
        <span>What is Flowbite?</span>
        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </h2>
    <div id="accordion-example-body-1" class="hidden" aria-labelledby="accordion-example-heading-1">
      <div class="p-5 border border-b-0 border-gray-200 ">
        <p class="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components
          built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p class="text-gray-500 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/"
            class="text-blue-600 hover:underline">get
            started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </div>
    </div>
    <h2 id="accordion-example-heading-2">
      <button type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
        aria-expanded="false" aria-controls="accordion-example-body-2">
        <span>Is there a Figma file available?</span>
        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </h2>
    <div id="accordion-example-body-2" class="hidden" aria-labelledby="accordion-example-heading-2">
      <div class="p-5 border border-b-0 border-gray-200">
        <p class="mb-2 text-gray-500 ">Flowbite is first conceptualized and designed using the Figma
          software so everything you see in the library has a design equivalent in our Figma file.</p>
        <p class="text-gray-500 ">Check out the <a href="https://flowbite.com/figma/"
            class="text-blue-600 hover:underline">Figma design system</a> based on the utility
          classes from Tailwind CSS and components from Flowbite.</p>
      </div>
    </div>
    <h2 id="accordion-example-heading-3">
      <button type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
        aria-expanded="false" aria-controls="accordion-example-body-3">
        <span>What are the differences between Flowbite and Tailwind UI?</span>
        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </h2>
    <div id="accordion-example-body-3" class="hidden" aria-labelledby="accordion-example-heading-3">
      <div class="p-5 border border-t-0 border-gray-200">
        <p class="mb-2 text-gray-500">The main difference is that the core components from Flowbite
          are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that
          Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
        <p class="mb-2 text-gray-500">However, we actually recommend using both Flowbite, Flowbite
          Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
        <p class="mb-2 text-gray-500">Learn more about these technologies:</p>
        <ul class="ps-5 text-gray-500 list-disc">
          <li><a href="https://flowbite.com/pro/" class="text-blue-600">Flowbite
              Pro</a></li>
          <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline">Tailwind UI</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div> -->
  <!-- <div id="columns" class="row" style="display: flex;">

  </div>
  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
  <script type="module" src="./assets/icons/index.js"></script> -->
  <script type="module" src="./main.js"></script>
  <script type="module">
   
    // [{
    //   id: 0,
    //   cards: [
    //     { data: "0" },
    //   ]
    // },
    // {
    //   id: 1,
    //   cards: [
    //     { data: "1" },
    //   ]
    // }, {
    //   id: 2,
    //   cards: [
    //     { data: "2" },
    //   ]
    // }
    // ].forEach(c => {
    //   const col = document.createElement("div")
    //   col.className = "w-full"
    //   col.innerHTML = `
 


    //   <div class="border m-1 p-2">
    //      <div class="flex gap-1 items-center mb-6">
    //       <svg class="handle size-6 text-slate-200 hover:text-slate-700" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3" /><path d="M15 12h6" /><path d="M6 9l-3 3l3 3" /><path d="M3 12h6" /><path d="M9 18l3 3l3 -3" /><path d="M12 15v6" /><path d="M15 6l-3 -3l-3 3" /><path d="M12 3v6" /></svg>
    //     <div class="flex-1 text-center">
    //       <span class="badge">14</span>
    //       Drag me by the handle
    //     </div>
    //     </div>
    //           <div id="simpleList" class="list-group">

    //       ${c.cards.reduce((acc, cur) => acc + `<!-- Simple List -->
    //         <div class="border m-1 p-2 flex gap-1 justify-center items-center">${cur.data}</div>
    //         `, "")
    //     }
    //         <div>
    //           <button></button>
    //           </div>
    //       </div>
    //   </div>
    //   `;
    //   columns.appendChild(col)
    // })
    // document.querySelectorAll(".list-group").forEach((ls) => {
    //   Sortable.create(ls, {
    //     group: "shared",
    //     animation: 150
    //   });
    // })
    // Sortable.create(columns, {
    //   handle: '.handle',
    //   animation: 150
    // });
  </script>

export const productiveList = [
{
title: "Boards",
desc: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
img: "/productive_1.jpg",
},
{
title: "Lists",
desc: "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.",
img: "/productive_2.jpg",
},
{
title: "Cards",
desc: "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
img: "/productive_3.jpg",
},
];

export const workflowList = [
{
title: "Project management",
desc: "Keep tasks in order, deadlines on track, and team members aligned with Trello.",
img: "/workflow_1.png",
color: "bg-[#ff7452]",
},
{
title: "Meetings",
desc: "Empower your team meetings to be more productive, empowering, and dare we say—fun.",
img: "/workflow_2.png",
color: "bg-[#2684ff]",
},
{
title: "Onboarding",
desc: "Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.",
img: "/workflow_3.png",
color: "bg-[#57d9a3]",
},
{
title: "Task management",
desc: "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.",
img: "/workflow_4.png",
color: "bg-[#ffc400]",
},
{
title: "Resource hub",
desc: "Save time with a well-designed hub that helps teams find information easily and quickly.",
img: "/workflow_5.png",
color: "bg-[#f99cdb]",
},
];

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <style>
    .ticket-list {
      height: 300px;
    }
  </style>
</head>

<body>
  <section id="modal">
    <h2>Modal</h2>
    <button class="contrast" data-target="modal-example" onclick="toggleModal(event)">
      Launch demo modal
    </button>
  </section>
  <dialog id="modal-example">
    <article>
      <header>
        <button aria-label="Close" rel="prev" data-target="modal-example" onclick="toggleModal(event)"></button>
        <h3>Confirm your action!</h3>
      </header>
      <p>
        Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
        pellentesque. Nullam finibus risus non semper euismod.
      </p>
      <footer>
        <button role="button" class="secondary" data-target="modal-example" onclick="toggleModal(event)">
          Cancel</button><button autofocus data-target="modal-example" onclick="toggleModal(event)">
          Confirm
        </button>
      </footer>
    </article>
  </dialog>
  <form id="ticketForm">
    <input type="hidden" name="ticketId" value="0">
    <div>
      <label for="title">Title:</label>
      <input type="text" name="title" placeholder="Title" required>
    </div>
    <div>
      <label for="date">Date:</label>
      <input type="date" name="date" required>
    </div>
    <div>
      <label for="priority">Priority:</label>
      <select name="priority" required>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div>
      <label for="stage">Stage:</label>
      <select name="stage" required>
        <option value="todo">Todo</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <div id="teamMembers">
      <label>Team Members:</label>
      <button type="button" id="addMemberBtn">Add Team Member</button>
      <!-- Los miembros del equipo se añadirán aquí -->
    </div>
    <div>
      <button type="submit">Save Ticket</button>
    </div>
  </form>

  <hr>

  <div id="columns">
    <div class="column" data-stage="todo">
      <h2>Todo</h2>
      <div class="ticket-list" id="todo"></div>
    </div>
    <div class="column" data-stage="in progress">
      <h2>In Progress</h2>
      <div class="ticket-list" id="in-progress"></div>
    </div>
    <div class="column" data-stage="completed">
      <h2>Completed</h2>
      <div class="ticket-list" id="completed"></div>
    </div>
  </div>
  <script>
    let tickets = [];
    let nextId = 1;

    document.getElementById('ticketForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);

      const ticketId = parseInt(formData.get('ticketId'));
      const title = formData.get('title');
      const date = formData.get('date');
      const priority = formData.get('priority');
      const stage = formData.get('stage');

      const teamMembers = [];
      document.querySelectorAll('#teamMembers .team-member').forEach(member => {
        const name = member.querySelector('.teamName').value;
        const email = member.querySelector('.teamEmail').value;
        const password = member.querySelector('.teamPassword').value;
        teamMembers.push({ name, email, password });
      });

      const ticket = {
        id: ticketId === 0 ? nextId++ : ticketId,
        title,
        date,
        priority,
        team: teamMembers,
        stage
      };

      if (ticketId === 0) {
        tickets.push(ticket);
      } else {
        const index = tickets.findIndex(t => t.id === ticketId);
        tickets[index] = ticket;
      }

      clearForm();
      renderTickets();
    });

    function renderTickets() {
      const stages = ['todo', 'in progress', 'completed'];
      stages.forEach(stage => {
        const column = document.getElementById(stage.replace(' ', '-'));
        column.innerHTML = '';
        tickets.filter(ticket => ticket.stage === stage).forEach(ticket => {
          const ticketElement = createTicketElement(ticket);
          column.appendChild(ticketElement);
        });
      });
    }

    function createTicketElement(ticket) {
      const ticketDiv = document.createElement('div');
      ticketDiv.classList.add('ticket');
      ticketDiv.setAttribute('draggable', true);
      ticketDiv.dataset.id = ticket.id;

      const teamInfo = ticket.team.map(member => `${member.name} (${member.email})`).join(', ');

      ticketDiv.innerHTML = `
        <h3>${ticket.title}</h3>
        <h3>${ticket.stage}</h3>
        <p>Date: ${ticket.date}</p>
        <p>Priority: ${ticket.priority}</p>
        <p>Team: ${teamInfo}</p>
    `;

      ticketDiv.addEventListener('dragstart', handleDragStart);
      ticketDiv.addEventListener('dragend', handleDragEnd);

      return ticketDiv;
    }

    function handleDragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.dataset.id);
      event.target.classList.add('dragging');
    }

    function handleDragEnd(event) {
      event.target.classList.remove('dragging');
    }

    function handleDrop(event) {
      const ticketId = event.dataTransfer.getData('text/plain');
      const newStage = event.target.closest('.column').dataset.stage;

      const ticket = tickets.find(t => t.id === parseInt(ticketId));
      ticket.stage = newStage;

      renderTickets();
    }

    function handleDragOver(event) {
      event.preventDefault();
    }

    document.querySelectorAll('.ticket-list').forEach(list => {
      list.addEventListener('dragover', handleDragOver);
      list.addEventListener('drop', handleDrop);
    });

    function clearForm() {
      const form = document.getElementById('ticketForm');
      form.reset();
      form.querySelector('[name="ticketId"]').value = 0;

      document.getElementById('teamMembers').innerHTML = '';
      addTeamMember();
    }

    function addTeamMember(name = '', email = '', password = '') {
      const teamMembersDiv = document.getElementById('teamMembers');

      const memberDiv = document.createElement('div');
      memberDiv.classList.add('team-member');

      memberDiv.innerHTML = `
        <input type="text" class="teamName" name="teamName[]" placeholder="Name" value="${name}" required>
        <input type="email" class="teamEmail" name="teamEmail[]" placeholder="Email" value="${email}" required>
        <input type="password" class="teamPassword" name="teamPassword[]" placeholder="Password" value="${password}" required>
        <button type="button" class="removeBtn">Remove</button>
    `;

      teamMembersDiv.appendChild(memberDiv);

      memberDiv.querySelector('.removeBtn').addEventListener('click', () => removeTeamMember(memberDiv));
    }

    function removeTeamMember(memberDiv) {
      memberDiv.remove();
    }

    document.getElementById('addMemberBtn').addEventListener('click', () => addTeamMember());


    /*

- Modal
-
- Pico.css - https://picocss.com
- Copyright 2019-2024 - Licensed under MIT
  \*/

  // Config
  const isOpenClass = "modal-is-open";
  const openingClass = "modal-is-opening";
  const closingClass = "modal-is-closing";
  const scrollbarWidthCssVar = "--pico-scrollbar-width";
  const animationDuration = 400; // ms
  let visibleModal = null;

  // Toggle modal
  const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.dataset.target);
  if (!modal) return;
  modal && (modal.open ? closeModal(modal) : openModal(modal));
  };

  // Open modal
  const openModal = (modal) => {
  const { documentElement: html } = document;
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth) {
  html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
  }
  html.classList.add(isOpenClass, openingClass);
  setTimeout(() => {
  visibleModal = modal;
  html.classList.remove(openingClass);
  }, animationDuration);
  modal.showModal();
  };

  // Close modal
  const closeModal = (modal) => {
  visibleModal = null;
  const { documentElement: html } = document;
  html.classList.add(closingClass);
  setTimeout(() => {
  html.classList.remove(closingClass, isOpenClass);
  html.style.removeProperty(scrollbarWidthCssVar);
  modal.close();
  }, animationDuration);
  };

  // Close with a click outside
  document.addEventListener("click", (event) => {
  if (visibleModal === null) return;
  const modalContent = visibleModal.querySelector("article");
  const isClickInside = modalContent.contains(event.target);
  !isClickInside && closeModal(visibleModal);
  });

  // Close with Esc key
  document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && visibleModal) {
  closeModal(visibleModal);
  }
  });

  // Get scrollbar width
  const getScrollbarWidth = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
  };

  // Is scrollbar visible
  const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height;
  };

  </script>
</body>

</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket CRUD</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>
</head>
<body class="container">
    <h1>Ticket Management</h1>

    <form id="ticketForm">
        <input type="hidden" id="ticketId" value="0">
        <label for="title">Title:</label>
        <input type="text" id="title" required>
        <br>
        <label for="date">Date:</label>
        <input type="date" id="date" required>
        <br>
        <label for="priority">Priority:</label>
        <select multiple id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
        </select>
        <br>
        <label for="stage">Stage:</label>
        <select id="stage">
            <option value="todo">To Do</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
        <br>
        <h3>Team Members</h3>
        <div id="teamMembers">
            <div class="team-member">
                <input type="text" class="teamName" placeholder="Name" required>
                <input type="email" class="teamEmail" placeholder="Email" required>
                <input type="password" class="teamPassword" placeholder="Password" required>
                <button type="button" onclick="removeTeamMember(this)">Remove</button>
            </div>
        </div>
        <button type="button" onclick="addTeamMember()">Add Team Member</button>
        <br><br>
        <button type="submit">Save Ticket</button>
    </form>

    <table id="ticketTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Team</th>
                <th>Stage</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <!-- Tickets will be dynamically inserted here -->
        </tbody>
    </table>

</body>
</html>
let tickets = [];
let nextId = 1;

document.getElementById('ticketForm').addEventListener('submit', function (event) {
event.preventDefault();

    const ticketId = parseInt(document.getElementById('ticketId').value);
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const stage = document.getElementById('stage').value;

    const teamMembers = [];
    document.querySelectorAll('#teamMembers .team-member').forEach(member => {
        const name = member.querySelector('.teamName').value;
        const email = member.querySelector('.teamEmail').value;
        const password = member.querySelector('.teamPassword').value;
        teamMembers.push({ name, email, password });
    });

    const ticket = {
        id: ticketId === 0 ? nextId++ : ticketId,
        title,
        date,
        priority,
        team: teamMembers,
        stage
    };

    if (ticketId === 0) {
        tickets.push(ticket);
    } else {
        const index = tickets.findIndex(t => t.id === ticketId);
        tickets[index] = ticket;
    }

    clearForm();
    renderTickets();

});

function renderTickets() {
const tbody = document.querySelector('#ticketTable tbody');
tbody.innerHTML = '';

    tickets.forEach(ticket => {
        const row = document.createElement('tr');

        const teamInfo = ticket.team.map(member => `${member.name} (${member.email})`).join(', ');

        row.innerHTML = `
            <td>${ticket.id}</td>
            <td>${ticket.title}</td>
            <td>${ticket.date}</td>
            <td>${ticket.priority}</td>
            <td>${teamInfo}</td>
            <td>${ticket.stage}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        `;

        tbody.appendChild(row);

        row.querySelector('.editBtn').addEventListener('click', () => editTicket(ticket.id));
        row.querySelector('.deleteBtn').addEventListener('click', () => deleteTicket(ticket.id));
    });

}

function editTicket(id) {
const ticket = tickets.find(t => t.id === id);
document.getElementById('ticketId').value = ticket.id;
document.getElementById('title').value = ticket.title;
document.getElementById('date').value = ticket.date;
document.getElementById('priority').value = ticket.priority;
document.getElementById('stage').value = ticket.stage;

    document.getElementById('teamMembers').innerHTML = '';

    ticket.team.forEach(member => {
        addTeamMember(member.name, member.email, member.password);
    });

}

function deleteTicket(id) {
tickets = tickets.filter(t => t.id !== id);
renderTickets();
}

function clearForm() {
document.getElementById('ticketId').value = 0;
document.getElementById('title').value = '';
document.getElementById('date').value = '';
document.getElementById('priority').value = 'high';
document.getElementById('stage').value = 'todo';
document.getElementById('teamMembers').innerHTML = '';
addTeamMember();
}

function addTeamMember(name = '', email = '', password = '') {
const teamMembersDiv = document.getElementById('teamMembers');

    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');

    memberDiv.innerHTML = `
        <input type="text" class="teamName" placeholder="Name" value="${name}" required>
        <input type="email" class="teamEmail" placeholder="Email" value="${email}" required>
        <input type="password" class="teamPassword" placeholder="Password" value="${password}" required>
        <button type="button" class="removeBtn">Remove</button>
    `;

    teamMembersDiv.appendChild(memberDiv);

    memberDiv.querySelector('.removeBtn').addEventListener('click', () => removeTeamMember(memberDiv));

}

function removeTeamMember(memberDiv) {
memberDiv.remove();
}

document.querySelector('button[onclick="addTeamMember()"]').addEventListener('click', () => addTeamMember());
