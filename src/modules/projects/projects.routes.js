import { Router } from "express"
import controller from "./projects.controller.js"

const router = Router()

router.get('/', controller.getAll)
router.post('/', controller.create)
router.route('/:id',)
  .get(controller.getById)
  .delete(controller.delete)
  .put(controller.update)

export default router