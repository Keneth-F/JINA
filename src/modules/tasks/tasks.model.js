import db from "../db/index.js";

const tasks = [
  { id: 0, title: "Tarea 1", completed: false },
  { id: 1, title: "Tarea 2", completed: true },
];
export class Task {
  static async getAll() {
    return tasks
    try {
      const [results] = await db.query("SELECT * FROM tasks");
      return results;
    } catch (err) {
      throw "Error al cargar las tareas";
    }
  }

  static async getById(data) {
    console.log(data)
    const task = tasks.find(task => task.id == id)
    return task
  }

  static async create(data) {
    const task = {
      id: tasks.length,
      ...data
    }

    tasks.push(task)

    return task
  }

  static async delete({ id }) {
    const taskIndex = tasks.findIndex(task => task.id == id)
    if (taskIndex === -1) return false

    tasks.splice(taskIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const taskIndex = tasks.findIndex(task => task.id == id)
    if (taskIndex === -1) return false

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...data
    }

    return tasks[taskIndex]
  }
}