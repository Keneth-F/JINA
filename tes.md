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
