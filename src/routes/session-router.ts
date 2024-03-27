import { Router } from 'express'
import { create, showAll, update, remove } from '../controllers/session-controller'
const router: Router = Router()

router.get("/session", create)
export default router;