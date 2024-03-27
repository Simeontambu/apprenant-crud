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
exports.deleteSession = exports.updateSession = exports.showAllSessions = exports.createSession = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield prisma.session.create({
        data: {
            annee: data.annee,
            Type: data.Type,
            Ville: data.Ville,
        },
    });
    return session;
});
exports.createSession = createSession;
const showAllSessions = () => __awaiter(void 0, void 0, void 0, function* () {
    const sessions = yield prisma.session.findMany();
    return sessions;
});
exports.showAllSessions = showAllSessions;
const updateSession = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield prisma.session.update({
        where: { id: id },
        data: {
            annee: data.annee,
            Type: data.Type,
            Ville: data.Ville,
        },
    });
    return session;
});
exports.updateSession = updateSession;
const deleteSession = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield prisma.session.delete({
        where: { id: id },
    });
    return session;
});
exports.deleteSession = deleteSession;
//# sourceMappingURL=session-service.js.map