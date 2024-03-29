import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/fabriquant-controller'
const router: Router = Router()
router.post("/fabriquant", create)
router.get("/fabriquant", showAll)
router.put("/fabriquant/:id", update)
router.delete("/fabriquant/:id", remove)
export default router;