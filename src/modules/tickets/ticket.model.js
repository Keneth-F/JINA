import db from "../db/index.js";
const labels = [
  {
    text: "high",
    bgColor: 'bg-error'
  },
  {
    text: "medium",
    bgColor: 'bg-warning'
  },
  {
    text: "normal",
    bgColor: 'bg-success'
  },
  {
    text: "low",
    bgColor: 'bg-info'
  }]
const tickets = [
  {
    "id": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
    "owner": "kfg@email.com",
    "title": "Project Management Board",
    "bgColor": "bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200",
    "columns": [
      {
        "id": "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "title": "To Do",
        "order": 1,
        "boardId": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "cards": [
          {
            "id": "c1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
            "title": "Design Landing Page",
            "order": 1,
            "description": "Create a mockup for the landing page",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "title": "Set up Database",
            "order": 2,
            "description": "Initialize the database schema and tables",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
        "createdAt": "2024-08-29T10:15:30Z",
        "updatedAt": "2024-08-29T12:20:45Z"
      },
      {
        "id": "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
        "title": "In Progress",
        "order": 2,
        "boardId": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "cards": [
          {
            "id": "c3b4c5d6-e7f8-g9h0-i1j2-k3l4m5n6o7p8",
            "title": "Develop Authentication",
            "order": 1,
            "description": "Implement user authentication using JWT",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
        "createdAt": "2024-08-29T10:20:00Z",
        "updatedAt": "2024-08-29T12:30:15Z"
      },
      {
        "id": "l3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
        "title": "Ideas",
        "order": 1,
        "boardId": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        "cards": [
          {
            "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
            "title": "Social Media Plan",
            "order": 1,
            "description": "Draft a social media strategy",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
            "title": "Ad Campaign Concept",
            "order": 2,
            "description": "Brainstorm ideas for the new ad campaign",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
        "createdAt": "2024-08-29T11:10:00Z",
        "updatedAt": "2024-08-29T11:50:00Z"
      },
      {
        "id": "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
        "title": "Execution",
        "order": 2,
        "boardId": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        "cards": [
          {
            "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
            "title": "Launch Website",
            "order": 1,
            "description": "Deploy the marketing website",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
        "createdAt": "2024-08-29T11:20:00Z",
        "updatedAt": "2024-08-29T12:00:00Z"
      },
      {
        "id": "l5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
        "title": "Completed",
        "order": 3,
        "boardId": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "cards": [
          {
            "id": "c7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2",
            "title": "Final Review",
            "order": 1,
            "description": "Conduct a final review of the project",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
        "createdAt": "2024-08-29T12:30:00Z",
        "updatedAt": "2024-08-29T13:00:00Z"
      }
    ]
    ,
    "createdAt": "2024-08-29T10:15:30Z",
    "updatedAt": "2024-08-29T12:20:45Z"
  },
  {
    "id": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
    "owner": "kfg@email.com",
    "title": "Marketing Campaign",
    "bgColor": 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    "columns": [
      {
        "id": "l3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
        "title": "Ideas",
        "order": 1,
        "cards": [
          {
            "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
            "title": "Social Media Plan",
            "order": 1,
            "description": "Draft a social media strategy",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
            "title": "Ad Campaign Concept",
            "order": 2,
            "description": "Brainstorm ideas for the new ad campaign",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ]
      },
      {
        "id": "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
        "title": "Execution",
        "order": 2,
        "cards": [
          {
            "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
            "title": "Launch Website",
            "order": 1,
            "description": "Deploy the marketing website",
            "label": labels[Math.floor(Math.random() * labels.length)],
            "date": 'Dec 12',
            "comments": Math.floor(Math.random() * 10),
            "attachments": Math.floor(Math.random() * 2),
            "team": [
              { "avatar": 'https://randomuser.me/api/portraits/women/26.jpg' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
              { "avatar": 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ]
      }
    ],
    "createdAt": "2024-08-29T11:00:00Z",
    "updatedAt": "2024-08-29T13:30:15Z"
  }
]
export class Ticket {
  static async getAll({ email }) {
    return tickets.filter(ticket => ticket.owner == email) ?? []
    const [results] = await db.query("SELECT * FROM tickets");
    return results;
  }

  static async getById({ id }) {
    const ticket = tickets.find(ticket => ticket.id == id)
    return ticket
  }

  static async create(data) {
    const ticket = {
      id: tickets.length,
      ...data
    }
    tickets.push(ticket)
    return ticket
  }

  static async delete({ id }) {
    const ticketIndex = tickets.findIndex(ticket => ticket.id == id)
    if (ticketIndex === -1) return false
    tickets.splice(ticketIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const ticketIndex = tickets.findIndex(ticket => ticket.id == id)
    if (ticketIndex === -1) return false
    tickets[ticketIndex] = {
      ...tickets[ticketIndex],
      ...data
    }
    return tickets[ticketIndex]
  }
}