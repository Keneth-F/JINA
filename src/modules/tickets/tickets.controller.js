import { Ticket } from "./ticket.model.js"
const getAll = (req, res) => Ticket
  .getAll()
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))


const create = ({ body }, res) => Ticket
  .create(body)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const getById = ({ params }, res) => Ticket
  .getById(params)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const _delete = ({ params }, res) => Ticket
  .delete(params)
  .then((data) => res.json({ data }))
  .catch(error => res.status(500).json({ message: error }))

const update = ({ params: { id }, body: data }, res) => Ticket
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