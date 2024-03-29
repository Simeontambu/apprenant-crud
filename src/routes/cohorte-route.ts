import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/cohorte-controller'
const router: Router = Router()
router.post("/cohorte", create)
router.get("/cohorte", showAll)
router.put("/cohorte/:id", update)
router.delete("/cohorte/:id", remove)
export default router;