"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controller_1 = require("../controllers/session-controller");
const router = (0, express_1.Router)();
router.post("/session", session_controller_1.create);
router.get("/session", session_controller_1.showAll);
router.put("/session/:id", session_controller_1.update);
router.delete("/session/:id", session_controller_1.remove);
exports.default = router;
//# sourceMappingURL=session-router.js.map