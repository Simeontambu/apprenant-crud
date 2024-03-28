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
exports.deleteApprenant = exports.updateApprenant = exports.showAllApprenant = exports.createApprenant = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createApprenant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const apprenant = yield prisma.apprennat.create({
        data: {
            Nom: data.Nom,
            Postnom: data.Postnom,
            Prenom: data.Prenom,
            Date_naissance: data.Date_naissance,
            Adresse: data.Adresse,
            Email: data.Email,
            Telephone: data.Telephone,
            cohorte: data.cohorte,
            machine: data.machine
        },
    });
    return apprenant;
});
exports.createApprenant = createApprenant;
const showAllApprenant = () => __awaiter(void 0, void 0, void 0, function* () {
    const appranant = yield prisma.apprennat.findMany();
    return appranant;
});
exports.showAllApprenant = showAllApprenant;
const updateApprenant = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const apprenant = yield prisma.apprennat.update({
        where: { Matricule_apprenant: id },
        data: {
            Nom: data.Nom,
            Postnom: data.Postnom,
            Prenom: data.Prenom,
            Date_naissance: data.Date_naissance,
            Adresse: data.Adresse,
            Email: data.Email,
            Telephone: data.Telephone,
            cohorte: data.cohorte,
            machine: data.machine,
        },
    });
    return apprenant;
});
exports.updateApprenant = updateApprenant;
const deleteApprenant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const apprenant = yield prisma.apprennat.delete({
        where: { Matricule_apprenant: id },
    });
    return apprenant;
});
exports.deleteApprenant = deleteApprenant;
//# sourceMappingURL=apprennat-service.js.map