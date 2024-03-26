const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const dotenv =require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.json())
app.listen(PORT, console.log("Server don start for port: " + PORT))
