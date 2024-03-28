"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.showAll = exports.create = void 0;
const model_service_1 = require("../services/model-service");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = yield (0, model_service_1.createModel)({
            Libelle: req.body.libelle,
        });
        return res.status(201).json({
            Message: "Model create",
            data: model
        });
    }
    catch (error) {
        console.error("Error create model", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
});
exports.create = create;
const showAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield (0, model_service_1.showAllModel)();
    return res.status(201).json({
        Message: "Model data list",
        data: model
    });
});
exports.showAll = showAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const model = yield (0, model_service_1.updateModel)({
            Libelle: req.body.libelle,
        }, id);
        return res.status(201).json({
            Message: "Model update",
            data: model
        });
    }
    catch (error) {
        console.error("Error update Model", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const model = yield (0, model_service_1.deleteModel)(id);
    return res.status(201).json({
        Message: "Model delete",
        data: model
    });
});
exports.remove = remove;
//# sourceMappingURL=model-controller.js.map