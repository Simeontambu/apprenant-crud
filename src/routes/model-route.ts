import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/model-controller'
const router: Router = Router()
router.post("/model", create)
router.get("/model", showAll)
router.put("/model/:id", update)
router.delete("/model/:id", remove)
export default router;