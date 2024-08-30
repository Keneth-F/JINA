import { Ticket } from "./ticket.model.js"
const getAll = (req, res, next) => Ticket
  .getAll()
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const create = ({ body }, res, next) => Ticket
  .create(body)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const getById = ({ params }, res, next) => Ticket
  .getById(params)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const _delete = ({ params }, res, next) => Ticket
  .delete(params)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const update = ({ params: { id }, body: data }, res, next) => Ticket
  .update({ id, data })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

export default {
  getAll,
  create,
  getById,
  delete: _delete,
  update,
};