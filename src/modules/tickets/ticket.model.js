import db from "../db/index.js";

const tickets = [
  {
    id: 0,
    title: "Ticket 1",
    date: new Date(),
    image: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    priority: ["high", "medium", "normal", "low"][0],
    team: [{
      name: "keneth",
      email: "kfg@email.com",
      password: "1234",
      // tasks: tasks,
    }],
    stage: ["todo", "in progress", "completed"][0],
    // activities: [
    //   {
    //     activity: "assigned",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "started",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "in progress",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "bug",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "completed",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "commented",
    //     date: new Date(),
    //     by: Users[0]
    //   }
    // ],
    // subTasks: [
    //   {
    //     title: String,
    //     date: Date,
    //     tag: String,
    //   },
    // ]
    // isTrashed: false ,
  },
  {
    id: 1,
    title: "Ticket 2",
    date: new Date(),
    image: "https://plus.unsplash.com/premium_photo-1714674731936-f70ba9d78eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    priority: ["high", "medium", "normal", "low"][0],
    team: [{
      name: "keneth-1",
      email: "kfg@email.com",
      password: "1234",
      // tasks: tasks,
    }],
    stage: ["todo", "in progress", "completed"][0],
    // activities: [
    //   {
    //     activity: "assigned",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "started",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "in progress",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "bug",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "completed",
    //     date: new Date(),
    //     by: Users[0]
    //   },
    //   {
    //     activity: "commented",
    //     date: new Date(),
    //     by: Users[0]
    //   }
    // ],
    // subTasks: [
    //   {
    //     title: String,
    //     date: Date,
    //     tag: String,
    //   },
    // ]
    // isTrashed: false ,
  }
]
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

  static async getById({ id }) {
    const ticket = tickets.find(ticket => ticket.id == id)
    console.log({ ticket })
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