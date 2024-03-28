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
exports.deleteFabriquant = exports.updateFrabriquant = exports.showAllModel = exports.createFrabriquant = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createFrabriquant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const fabriquant = yield prisma.fabriquant.create({
        data: {
            Libelle: data.Libelle,
        },
    });
    return fabriquant;
});
exports.createFrabriquant = createFrabriquant;
const showAllModel = () => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield prisma.fabriquant.findMany();
    return model;
});
exports.showAllModel = showAllModel;
const updateFrabriquant = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const fabriquant = yield prisma.fabriquant.update({
        where: { Code_fabriquant: id },
        data: {
            Libelle: data.Libelle,
        },
    });
    return fabriquant;
});
exports.updateFrabriquant = updateFrabriquant;
const deleteFabriquant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const fabriquant = yield prisma.fabriquant.delete({
        where: { Code_fabriquant: id },
    });
    return fabriquant;
});
exports.deleteFabriquant = deleteFabriquant;
//# sourceMappingURL=fabriquant-service.js.map