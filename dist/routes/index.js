"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_router_1 = __importDefault(require("./session-router"));
const router = (0, express_1.Router)();
router.use("/api/", session_router_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map