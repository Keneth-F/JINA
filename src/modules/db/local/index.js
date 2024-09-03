import { selectRandomLabel } from "../../../utils";

export const projects = [
  {
    "id": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
    "owner": "kfg@email.com",
    "title": "Project Management Board",
    "bgColor": "bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200",
    "stages": [
      {
        "id": "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "title": "To Do",
        "order": 1,
        "project": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "tickets": [
          {
            "id": "c1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
            "title": "Design Landing Page",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "title": "Set up Database",
            "order": 2,
            "label": selectRandomLabel(),
            stage: "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
      },
      {
        "id": "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
        "title": "In Progress",
        "order": 2,
        "project": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "tickets": [
          {
            "id": "c3b4c5d6-e7f8-g9h0-i1j2-k3l4m5n6o7p8",
            "title": "Develop Authentication",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
      },
      {
        "id": "l3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
        "title": "Ideas",
        "order": 1,
        "project": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        "tickets": [
          {
            "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
            "title": "Social Media Plan",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
            "title": "Ad Campaign Concept",
            "order": 2,
            "label": selectRandomLabel(),
            stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
      },
      {
        "id": "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
        "title": "Execution",
        "order": 2,
        "project": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        "tickets": [
          {
            "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
            "title": "Launch Website",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
      },
      {
        "id": "l5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
        "title": "Completed",
        "order": 3,
        "project": "b1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
        "tickets": [
          {
            "id": "c7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2",
            "title": "Final Review",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ],
      }
    ]
    ,
  },
  {
    "id": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
    "owner": 'test@example.us',
    "title": "Marketing Campaign",
    "bgColor": 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    "stages": [
      {
        "id": "l3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
        "title": "Ideas",
        "order": 1,
        "tickets": [
          {
            "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
            "title": "Social Media Plan",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          },
          {
            "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
            "title": "Ad Campaign Concept",
            "order": 2,
            "label": selectRandomLabel(),
            stage: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ]
      },
      {
        "id": "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
        "title": "Execution",
        "order": 2,
        "tickets": [
          {
            "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
            "title": "Launch Website",
            "order": 1,
            "label": selectRandomLabel(),
            stage: "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
            "team": [
              { "email": "kenethfg123@email.com" },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' },
              { "email": 'kfg@email.com' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
          }
        ]
      }
    ],
  }
]
