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
exports.deleteCoach = exports.updateCoach = exports.showAllCoaches = exports.createCoach = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCoach = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const coach = yield prisma.coaches.create({
        data: {
            Nom: data.Nom,
            Postnom: data.Postnom,
            Prenom: data.Prenom,
            Date_naissance: data.Date_naissance,
            Adresse: data.Adresse,
            Email: data.Email,
            Telephone: data.Telephone,
        },
    });
    return coach;
});
exports.createCoach = createCoach;
const showAllCoaches = () => __awaiter(void 0, void 0, void 0, function* () {
    const coach = yield prisma.coaches.findMany();
    return coach;
});
exports.showAllCoaches = showAllCoaches;
const updateCoach = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const coach = yield prisma.coaches.update({
        where: { Matricule_coach: id },
        data: {
            Nom: data.Nom,
            Postnom: data.Postnom,
            Prenom: data.Prenom,
            Date_naissance: data.Date_naissance,
            Adresse: data.Adresse,
            Email: data.Email,
            Telephone: data.Telephone,
        },
    });
    return coach;
});
exports.updateCoach = updateCoach;
const deleteCoach = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const coach = yield prisma.coaches.delete({
        where: { Matricule_coach: id },
    });
    return coach;
});
exports.deleteCoach = deleteCoach;
//# sourceMappingURL=coach-service.js.map