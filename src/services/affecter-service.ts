import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createAffecter = async (data: Prisma.AffecterCreateInput) => {
    const affecter = await prisma.affecter.create({
        data: {
            cohorte: data.cohorte,
            coach: data.coach,
            Date: data.Date,
        },
    });
    return affecter
}

export const showAllAffecter = async () => {
    const affecter = await prisma.affecter.findMany();
    return affecter;
};

export const updateAffecter = async (data: Prisma.AffecterUpdateInput, id: number) => {
    const affecter = await prisma.affecter.update({
        where: { Code_affecter: id },
        data: {
            cohorte: data.cohorte,
            coach: data.coach,
            Date: data.Date,
        },
    });
    return affecter
}
export const deleteAffecter = async (id: number) => {
    const affecter = await prisma.affecter.delete({
        where: { Code_affecter: id },
    });
    return affecter
}
