const scenes = []
export class Scene {
  static async getAll({ email }) {
    return scenes.filter(scene => scene.boardId == email) ?? []
    const [results] = await db.query("SELECT * FROM scenes");
    return results;
  }

  static async getById({ id, user }) {
    const scene = scenes.find(scene => scene?.id == id && scene?.boardId == user.email) ?? []
    return scene
  }

  static async create({ user, ...data }) {
    const scene = {
      id: scenes.length,
      ...data,
      tickets: []
    }
    scenes.push(scene)
    return scene
  }

  static async delete({ id }) {
    const sceneIndex = scenes.findIndex(scene => scene.id == id)
    if (sceneIndex === -1) return false
    scenes.splice(sceneIndex, 1)
    return true
  }

  static async update({ id, data }) {
    const sceneIndex = scenes.findIndex(scene => scene.id == id)
    if (sceneIndex === -1) return false
    scenes[sceneIndex] = {
      ...scenes[sceneIndex],
      ...data
    }
    return scenes[sceneIndex]
  }
}