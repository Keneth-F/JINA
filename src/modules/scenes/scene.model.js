import db from "../db/mysql/index.js";
export class Stage {
  static async getAll({ email }) {
    const [results] = await db.query(`
      SELECT s.id AS stage_id, s.title AS stage_title, s.order AS stage_order,
       t.id AS ticket_id, t.title AS ticket_title, t.order AS ticket_order, t.label AS ticket_label
      FROM stages s
      LEFT JOIN tickets t ON s.id = t.stage;
      `);
    return results;
  }

  static async getById({ id, user }) {
    //TODO restrict email
    const [results] = await db.query(`
      SELECT s.id AS stage_id, s.title AS stage_title, s.order AS stage_order,
            t.id AS ticket_id, t.title AS ticket_title, t.order AS ticket_order, t.label AS ticket_label
      FROM stages s
      LEFT JOIN tickets t ON s.id = t.stage
      WHERE s.project = ? ;
    `, [id]);
    return results
  }

  static async create({ user, title, order, project }) {
    const [results] = await db.query(`
      INSERT INTO stages (title, \`order\`, project) VALUES (?, ?, ?);
    `, [title, order, project]);
    return {
      id: results.insertId,
      order,
      project,
      title,
      tickets: []
    }
  }

  static async delete({ id }) {
    console.log({ id })
    const [results] = await db.query(`DELETE FROM stages WHERE id = ?;`, [id]);
    return results
  }

  static async update({ id, data: { order, title, project, tickets } }) {
    const [results] = await db.query(`
      UPDATE stages SET title = ?, \`order\` = ?, project = ? WHERE id = ?;
    `, [order, title, project, id]);
    return { id, order, title, project, tickets }
  }
}