import { Router } from 'express'
import SessionRouter from './session-router'

const router: Router = Router()

router.use("/api/", SessionRouter);
export default router;