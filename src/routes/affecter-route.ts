import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/affecter-controller'
const router: Router = Router()
router.post("/affecter", create)
router.get("/affecter", showAll)
router.put("/affecter/:id", update)
router.delete("/affecter/:id", remove)
export default router;