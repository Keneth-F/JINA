import { selectedLabel } from "../../utils/index.js";
import db from "../db/mysql/index.js";
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
    `, [title, order, label, stage, id]);
    console.log({ label, results, selectedLabel: selectedLabel(label) })
    return {
      id,
      order,
      label: selectedLabel(label),
      stage,
      team,
      title

    }
  }
}