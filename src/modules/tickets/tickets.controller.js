import { Ticket } from "./ticket.model.js"
const getAll = ({ user }, res, next) => Ticket
  .getAll(user)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const create = ({ body, user }, res, next) => Ticket
  .create({ ...body, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const getById = ({ params, user }, res, next) => Ticket
  .getById({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const _delete = ({ params, user }, res, next) => Ticket
  .delete({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const update = ({ params: { id }, body: data, user }, res, next) => Ticket
  .update({ id, data, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

export default {
  getAll,
  create,
  getById,
  delete: _delete,
  update,
};