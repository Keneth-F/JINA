import { Task } from "./tasks.model.js"
const getAll = (req, res) => Task
  .getAll()
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))


const create = ({ body }, res) => Task
  .create(body)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const getById = ({ params }, res) => Task
  .getById(params)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const _delete = ({ params }, res) => Task
  .delete(params)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const update = ({ params: { id }, body: data }, res) => Task
  .update({ id, data })
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))


export default {
  getAll,
  create,
  getById,
  delete: _delete,
  update,
};