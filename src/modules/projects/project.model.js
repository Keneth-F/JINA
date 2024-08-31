const projects = []
export class Project {
  static async getAll({ email }) {
    return projects.filter(project => project.owner == email) ?? []
    const [results] = await db.query("SELECT * FROM projects");
    return results;
  }

  static async getById({ id, user }) {
    const project = projects.find(project => project?.id == id && project?.owner == user.email) ?? []
    return project
  }

  static async create({ user, ...data }) {
    const project = {
      id: projects.length,
      ...data,
      owner: user.email,
      scenes: []
    }
    projects.push(project)
    return project
  }

  static async delete({ id }) {
    const projectIndex = projects.findIndex(project => project.id == id)
    if (projectIndex === -1) return false
    projects.splice(projectIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const projectIndex = projects.findIndex(project => project.id == id)
    if (projectIndex === -1) return false
    projects[projectIndex] = {
      ...projects[projectIndex],
      ...data
    }
    return projects[projectIndex]
  }
}