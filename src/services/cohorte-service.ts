import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createCohorte = async (data: Prisma.CohorteCreateInput) => {
    const cohorte = await prisma.cohorte.create({
        data: {
            session: data.session,
            Description: data.Description,
        },
    });
    return cohorte
}

export const showAllCohortes = async () => {
    const cohorte = await prisma.cohorte.findMany();
    return cohorte;
};

export const updateCohorte = async (data: Prisma.CohorteUpdateInput, id: number) => {
    const cohorte = await prisma.cohorte.update({
        where: { Code_cohorte: id },
        data: {
            session: data.session,
            Description: data.Description,
        },
    });
    return cohorte
}
export const deleteCohorte = async (id: number) => {
    const cohorte = await prisma.cohorte.delete({
        where: { Code_cohorte: id },
    });
    return cohorte
}
