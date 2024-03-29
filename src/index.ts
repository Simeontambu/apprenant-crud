const express = require('express')
import { application } from 'express'
import sessionRouter from './routes/session-router'
import modelRouter from './routes/model-route'
import apprenantRouter from './routes/apprenant-route'
import affecterRouter from './routes/affecter-route'
import cohorteRouter from './routes/cohorte-route'
import fabriquantRouter from './routes/fabriquant-route'
import machineRouter from './routes/machine-route'
import coachRouter from './routes/coach-route'
const app: application = express()
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.json())
app.use("/api/", sessionRouter);
app.use("/api/", modelRouter);
app.use("/api/", apprenantRouter);
app.use("/api/", affecterRouter);
app.use("/api/", cohorteRouter);
app.use("/api/", fabriquantRouter);
app.use("/api/", machineRouter);
app.use("/api/", coachRouter);
app.listen(PORT, console.log("Server don start for port: " + PORT))
