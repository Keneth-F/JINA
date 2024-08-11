import { Router } from "express"
import controller from "./tasks.controller.js"

const router = Router()

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:id', controller.getById)
router.delete('/:id', controller.delete)
router.put('/:id', controller.update)

export default router