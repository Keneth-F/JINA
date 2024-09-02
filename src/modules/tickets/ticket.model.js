import { selectedLabel, selectRandomLabel } from "../../utils/index.js";
import db from "../db/index.js";

// const tickets = [
//   {
//     "id": "c1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
//     "title": "Design Landing Page",
//     "order": 1,
//     // "description": "Create a mockup for the landing page",
//     "label": selectRandomLabel(),
//     stage: "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
//     "title": "Set up Database",
//     "order": 2,
//     // "description": "Initialize the database schema and tables",
//     "label": selectRandomLabel(),
//     stage: "l1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c3b4c5d6-e7f8-g9h0-i1j2-k3l4m5n6o7p8",
//     "title": "Develop Authentication",
//     "order": 1,
//     // "description": "Implement user authentication using JWT",
//     "label": selectRandomLabel(),
//     stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
//     "title": "Social Media Plan",
//     "order": 1,
//     // "description": "Draft a social media strategy",
//     "label": selectRandomLabel(),
//     stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
//     "title": "Ad Campaign Concept",
//     "order": 2,
//     // "description": "Brainstorm ideas for the new ad campaign",
//     "label": selectRandomLabel(),
//     stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
//     "title": "Launch Website",
//     "order": 1,
//     // "description": "Deploy the marketing website",
//     "label": selectRandomLabel(),
//     stage: "l2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c7g8h9i0-j1k2-l3m4-n5o6-p7q8r9s0t1u2",
//     "title": "Final Review",
//     "order": 1,
//     // "description": "Conduct a final review of the project",
//     "label": selectRandomLabel(),
//     stage: "l5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
//     "title": "Social Media Plan",
//     "order": 1,
//     // "description": "Draft a social media strategy",
//     "label": selectRandomLabel(),
//     stage: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
//     "title": "Ad Campaign Concept",
//     "order": 2,
//     // "description": "Brainstorm ideas for the new ad campaign",
//     "label": selectRandomLabel(),
//     stage: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   },
//   {
//     "id": "c6f7g8h9-i0j1-k2l3-m4n5-o6p7q8r9s0t1",
//     "title": "Launch Website",
//     "order": 1,
//     // "description": "Deploy the marketing website",
//     "label": selectRandomLabel(),
//     stage: "l4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
//     // "date": 'Dec 12',
//     // "comments": Math.floor(Math.random() * 10),
//     // "attachments": Math.floor(Math.random() * 2),
//     "team": [
//       { "email": "kenethfg123@email.com" },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' },
//       { "email": 'kfg@email.com' }
//     ].slice(0, Math.floor(Math.random() * 6) + 1)
//   }
// ]
export class Ticket {
  static async getAll({ email }) {
    const [results] = await db.query(`
     SELECT * FROM tickets;
    `, []);
    return results
  }

  static async getById({ id }) {
    const [results] = await db.query(`
     SELECT * FROM tickets WHERE id = ?;
    `, [title, order, project, id]);
    return results
  }

  static async create({ order, label, stage, title, team }) {
    const [results] = await db.query(`
      INSERT INTO tickets (title, \`order\`, label, stage) VALUES (?, ?, ?, ?);
    `, [title, order, label, stage]);
    await Promise.all(team.map(async (_team) => {
      const [teamResults] = await db.query(`
        INSERT INTO ticket_team (ticket_id, team_member_email) VALUES (?, ?);
      `, [results.insertId, _team.email]);
    }))
    return {
      id: results.insertId,
      order,
      label: selectedLabel(label),
      stage,
      team,
      title

    }
  }

  static async delete({ id }) {
    const [results] = await db.query(`
      DELETE FROM tickets WHERE id = ?;
    `, [id]);
    return results
  }

  static async update({ id, data: { title, order, label, stage, team } }) {
    const [results] = await db.query(`
      UPDATE tickets SET title = ?, \`order\` = ?, label = ?, stage = ? WHERE id = ?;
    `, [title, order, label.text, stage, id]);
    return {
      id,
      order,
      label: selectedLabel(label.text),
      stage,
      team,
      title

    }
  }
}