import db from "../db/index.js";

const tickets = []
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

  static async create({ priority, ...data }) {
    const ticket = {
      ...data,
      id: tickets.length,
      label: labels.find((lbl) => priority == lbl.text),
    }
    tickets.push(ticket)
    console.log(tickets)
    return ticket
  }

  static async delete({ id }) {
    const ticketIndex = tickets.findIndex(ticket => ticket.id == id)
    if (ticketIndex === -1) throw { message: "Not found, ticket doesn't exists", status: 404 }
    tickets.splice(ticketIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const ticketIndex = tickets.findIndex(ticket => ticket.id == id)
    if (ticketIndex === -1) throw { message: "Not found, ticket doesn't exists", status: 404 }
    tickets[ticketIndex] = {
      ...tickets[ticketIndex],
      ...data
    }
    return tickets[ticketIndex]
  }
}