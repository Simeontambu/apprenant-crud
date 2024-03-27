const express = require('express')
import { application } from 'express'
const app: application = express()
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const router = require('./routes/index')
const dotenv = require('dotenv')
dotenv.config();
app.use(cors())
app.use(router)
app.use(express.json())
app.listen(PORT, console.log("Server don start for port: " + PORT))
