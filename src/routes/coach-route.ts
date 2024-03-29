import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/coach-controller'
const router: Router = Router()
router.post("/coach", create)
router.get("/coach", showAll)
router.put("/coach/:id", update)
router.delete("/coach/:id", remove)
export default router;