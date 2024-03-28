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
exports.deleteModel = exports.updateModel = exports.showAllModel = exports.createModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createModel = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield prisma.model.create({
        data: {
            Libelle: data.Libelle,
        },
    });
    return model;
});
exports.createModel = createModel;
const showAllModel = () => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield prisma.model.findMany();
    return model;
});
exports.showAllModel = showAllModel;
const updateModel = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield prisma.model.update({
        where: { Code_modele: id },
        data: {
            Libelle: data.Libelle,
        },
    });
    return model;
});
exports.updateModel = updateModel;
const deleteModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield prisma.model.delete({
        where: { Code_modele: id },
    });
    return model;
});
exports.deleteModel = deleteModel;
//# sourceMappingURL=model-service.js.map