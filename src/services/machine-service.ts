import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createMachine = async (data: Prisma.MachineCreateInput) => {
    const machine = await prisma.machine.create({
        data: {
            model: data.model,
            frabriquant: data.frabriquant,
            coach: data.coach,
        },
    });
    return machine
}

export const showAllMachines = async () => {
    const machine = await prisma.machine.findMany();
    return machine;
};

export const updateMachine = async (data: Prisma.MachineUpdateInput, id: number) => {
    const machine = await prisma.machine.update({
        where: { Tag_machine: id },
        data: {
            model: data.model,
            frabriquant: data.frabriquant,
            coach: data.coach,
        },
    });
    return machine
}
export const deleteMachine = async (id: number) => {
    const machine = await prisma.machine.delete({
        where: { Tag_machine: id },
    });
    return machine
}
