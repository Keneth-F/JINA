import db from "../db/index.js";

const tickets = [
  { id: 0, title: "Ticket 1", completed: false },
  { id: 1, title: "Ticket 2", completed: true },
];
export class Ticket {
  static async getAll() {
    return tickets
    try {
      const [results] = await db.query("SELECT * FROM tickets");
      return results;
    } catch (err) {
      throw "Error al cargar las Tickets";
    }
  }

  static async getById(data) {
    console.log(data)
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