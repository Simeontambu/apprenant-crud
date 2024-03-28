import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/session-controller'
const router: Router = Router()
router.post("/session", create)
router.get("/session", showAll)
router.put("/session/:id", update)
router.delete("/session/:id", remove)
export default router;