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
exports.deleteMachine = exports.updateMachine = exports.showAllMachines = exports.createMachine = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createMachine = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const machine = yield prisma.machine.create({
        data: {
            model: data.model,
            frabriquant: data.frabriquant,
            coach: data.coach,
        },
    });
    return machine;
});
exports.createMachine = createMachine;
const showAllMachines = () => __awaiter(void 0, void 0, void 0, function* () {
    const machine = yield prisma.machine.findMany();
    return machine;
});
exports.showAllMachines = showAllMachines;
const updateMachine = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const machine = yield prisma.machine.update({
        where: { Tag_machine: id },
        data: {
            model: data.model,
            frabriquant: data.frabriquant,
            coach: data.coach,
        },
    });
    return machine;
});
exports.updateMachine = updateMachine;
const deleteMachine = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const machine = yield prisma.machine.delete({
        where: { Tag_machine: id },
    });
    return machine;
});
exports.deleteMachine = deleteMachine;
//# sourceMappingURL=machine-service.js.map