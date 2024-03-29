import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/apprenant-controller'
const router: Router = Router()
router.post("/apprenant", create)
router.get("/apprenant", showAll)
router.put("/apprenant/:id", update)
router.delete("/apprenant/:id", remove)
export default router;