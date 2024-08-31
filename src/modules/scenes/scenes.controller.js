import { Scene } from "./scene.model.js"
const getAll = ({ user }, res, next) => Scene
  .getAll(user)
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const create = ({ body, user }, res, next) => Scene
  .create({ ...body, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const getById = ({ params, user }, res, next) => Scene
  .getById({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const _delete = ({ params, user }, res, next) => Scene
  .delete({ ...params, user })
  .then((data) => res.json({ data }))
  .catch(({ message, status }) => next({ message, status }))

const update = ({ params: { id }, body: data, user }, res, next) => Scene
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