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
const session_service_1 = require("../services/session-service");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, session_service_1.createSession)({
        annee: req.body.annee,
        Type: req.body.type,
        Ville: req.body.ville,
    });
    console.log('get');
    return res.status(201).json({
        Message: "Session create",
        data: session
    });
});
exports.create = create;
const showAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, session_service_1.showAllSessions)();
    return res.status(201).json({
        Message: "Session data list",
        data: session
    });
});
exports.showAll = showAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const session = yield (0, session_service_1.updateSession)({
        annee: req.body.annee,
        Type: req.body.type,
        Ville: req.body.ville,
    }, id);
    return res.status(201).json({
        Message: "Session update",
        data: session
    });
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const session = yield (0, session_service_1.deleteSession)(id);
    return res.status(201).json({
        Message: "Session deelte",
        data: session
    });
});
exports.remove = remove;
//# sourceMappingURL=session-controller.js.map