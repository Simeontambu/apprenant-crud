"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const session_router_1 = __importDefault(require("./routes/session-router"));
const model_route_1 = __importDefault(require("./routes/model-route"));
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/", session_router_1.default);
app.use("/api/", model_route_1.default);
app.listen(PORT, console.log("Server don start for port: " + PORT));
//# sourceMappingURL=index.js.map