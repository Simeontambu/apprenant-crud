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
exports.deleteCohorte = exports.updateCohorte = exports.showAllCohortes = exports.createCohorte = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCohorte = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const cohorte = yield prisma.cohorte.create({
        data: {
            session: data.session,
            Description: data.Description,
        },
    });
    return cohorte;
});
exports.createCohorte = createCohorte;
const showAllCohortes = () => __awaiter(void 0, void 0, void 0, function* () {
    const cohorte = yield prisma.cohorte.findMany();
    return cohorte;
});
exports.showAllCohortes = showAllCohortes;
const updateCohorte = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const cohorte = yield prisma.cohorte.update({
        where: { Code_cohorte: id },
        data: {
            session: data.session,
            Description: data.Description,
        },
    });
    return cohorte;
});
exports.updateCohorte = updateCohorte;
const deleteCohorte = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cohorte = yield prisma.cohorte.delete({
        where: { Code_cohorte: id },
    });
    return cohorte;
});
exports.deleteCohorte = deleteCohorte;
//# sourceMappingURL=cohorte-service.js.map