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
exports.deleteAffecter = exports.updateAffecter = exports.showAllAffecter = exports.createAffecter = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createAffecter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const affecter = yield prisma.affecter.create({
        data: {
            cohorte: data.cohorte,
            coach: data.coach,
            Date: data.Date,
        },
    });
    return affecter;
});
exports.createAffecter = createAffecter;
const showAllAffecter = () => __awaiter(void 0, void 0, void 0, function* () {
    const affecter = yield prisma.affecter.findMany();
    return affecter;
});
exports.showAllAffecter = showAllAffecter;
const updateAffecter = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const affecter = yield prisma.affecter.update({
        where: { Code_affecter: id },
        data: {
            cohorte: data.cohorte,
            coach: data.coach,
            Date: data.Date,
        },
    });
    return affecter;
});
exports.updateAffecter = updateAffecter;
const deleteAffecter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const affecter = yield prisma.affecter.delete({
        where: { Code_affecter: id },
    });
    return affecter;
});
exports.deleteAffecter = deleteAffecter;
//# sourceMappingURL=affecter-service.js.map