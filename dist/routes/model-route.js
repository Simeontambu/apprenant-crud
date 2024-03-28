"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_controller_1 = require("../controllers/model-controller");
const router = (0, express_1.Router)();
router.post("/model", model_controller_1.create);
router.get("/model", model_controller_1.showAll);
router.put("/model/:id", model_controller_1.update);
router.delete("/model/:id", model_controller_1.remove);
exports.default = router;
//# sourceMappingURL=model-route.js.map