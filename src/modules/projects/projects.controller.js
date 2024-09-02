import { Project } from "./project.model.js"
const getAll = ({ user }, res, next) => Project
  .getAll(user)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const create = ({ body, user }, res, next) => Project
  .create({ ...body, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const getById = ({ params, user }, res, next) => Project
  .getById({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const _delete = ({ params, user }, res, next) => Project
  .delete({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const update = ({ params: { id }, body: { ...data }, user }, res, next) => Project
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