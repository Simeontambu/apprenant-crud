const express = require('express')
import { application } from 'express'
import sessionRouter from './routes/session-router'
import modelRouter from './routes/model-route'
const app: application = express()
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.json())
app.use("/api/", sessionRouter);
app.use("/api/", modelRouter);
app.listen(PORT, console.log("Server don start for port: " + PORT))
