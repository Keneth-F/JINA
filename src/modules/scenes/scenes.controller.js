import { Stage } from "./scene.model.js"
const getAll = ({ user }, res, next) => Stage
  .getAll(user)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const create = ({ body, user }, res, next) => Stage
  .create({ ...body, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const getById = ({ params, user }, res, next) => Stage
  .getById({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const _delete = ({ params, user }, res, next) => Stage
  .delete({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const update = ({ params: { id }, body: data, user }, res, next) => Stage
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