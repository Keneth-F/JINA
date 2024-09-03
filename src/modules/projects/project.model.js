import { selectedLabel } from "../../utils/index.js";
import db from "../db/mysql/index.js";

function createProject(rows) {
  const project = initializeProject(rows);
  const stageMap = new Map();
  const ticketMap = new Map();
  const projectTeam = new Set();

  rows.forEach(row => {
    addProjectTeam(projectTeam, row);
    addStage(stageMap, project, row);
    addTicket(ticketMap, stageMap, row);
    addTicketTeam(ticketMap, row);
  });

  project.team = Array.from(projectTeam);
  return project;
}

function initializeProject(rows) {
  const firstRow = rows[0];
  return {
    id: firstRow.project_id,
    title: firstRow.project_title,
    bgColor: firstRow.project_bgColor,
    owner: firstRow.project_owner,
    stages: [],
    team: []
  };
}

function addProjectTeam(projectTeam, row) {
  if (row.project_member_email) {
    projectTeam.add(row.project_member_email);
  }
}

function addStage(stageMap, project, row) {
  if (row.stage_id && !stageMap.has(row.stage_id)) {
    const stage = {
      id: row.stage_id,
      title: row.stage_title,
      order: row.stage_order,
      tickets: []
    };
    stageMap.set(row.stage_id, stage);
    project.stages.push(stage);
  }
}

function addTicket(ticketMap, stageMap, row) {
  if (row.ticket_id && !ticketMap.has(row.ticket_id)) {
    const ticket = {
      id: row.ticket_id,
      title: row.ticket_title,
      order: row.ticket_order,
      label: selectedLabel(row.ticket_label),
      stage: row.stage_id,
      team: []
    };
    ticketMap.set(row.ticket_id, ticket);

    const stage = stageMap.get(row.stage_id);
    if (stage) {
      stage.tickets.push(ticket);
    }
  }
}

function addTicketTeam(ticketMap, row) {
  if (row.ticket_member_email) {
    const ticket = ticketMap.get(row.ticket_id);
    if (ticket) {
      ticket.team.push({ email: row.ticket_member_email });
    }
  }
}




export class Project {
  static async getAll({ email }) {
    const [results] = await db.query(`
        SELECT 
          p.id, p.title, p.bgColor
        FROM projects p
        WHERE p.owner = ?;
      `, [email]);
    return results;
  }

  static async getById({ id, user }) {
    //TODO populate, stages, tickets
    const [results] = await db.query(`
      SELECT 
          p.id AS project_id, 
          p.title AS project_title, 
          p.bgColor AS project_bgColor,
          p.owner AS project_owner,
          s.id AS stage_id, 
          s.title AS stage_title, 
          s.order AS stage_order,
          t.id AS ticket_id, 
          t.title AS ticket_title, 
          t.order AS ticket_order, 
          t.label AS ticket_label,
          pu.email AS project_member_email,
          tu.email AS ticket_member_email
      FROM 
          projects p
      LEFT JOIN 
          stages s ON p.id = s.project
      LEFT JOIN 
          tickets t ON s.id = t.stage
      LEFT JOIN 
          project_team pt ON p.id = pt.project_id
      LEFT JOIN 
          users pu ON pt.team_member_email = pu.email
      LEFT JOIN 
          ticket_team tt ON t.id = tt.ticket_id
      LEFT JOIN 
          users tu ON tt.team_member_email = tu.email
      WHERE 
          p.id = ? AND
          p.owner = ?
          
    `, [id, user.email]);
    return createProject(results);
  }

  static async create({ user, title, bgColor }) {
    //TODO insert into project_team
    const [results] = await db.query(`
      INSERT INTO projects (owner, title, bgColor) VALUES (?, ?, ?);
    `, [user.email, title, bgColor]);
    return {
      owner: user.email,
      title,
      bgColor,
      id: results.insertId
    }
  }

  static async delete({ id }) {
    //TODO revisar el user
    const [results] = await db.query(`
      DELETE FROM projects WHERE id = ?;
    `, [id]);
    return results
  }

  static async update({ id, data: { title, bgColor }, user }) {
    //TODO revisar
    const [results] = await db.query(`
      UPDATE projects SET owner = ?, title = ?, bgColor = ? WHERE id = ?;
    `, [user.email, title, bgColor, id]);
    return {
      owner: user.email,
      title,
      bgColor,
      stages: [],
      id,
    }
  }
}