import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/machine-controller'
const router: Router = Router()
router.post("/machine", create)
router.get("/machine", showAll)
router.put("/machine/:id", update)
router.delete("/machine/:id", remove)
export default router;