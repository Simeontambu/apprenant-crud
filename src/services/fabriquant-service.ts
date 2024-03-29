import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createFrabriquant = async (data: Prisma.FabriquantCreateInput) => {
    const fabriquant = await prisma.fabriquant.create({
        data: {
            Libelle: data.Libelle,
        },
    });
    return fabriquant
}

export const showAllFabriquant = async () => {
    const model = await prisma.fabriquant.findMany();
    return model;
};

export const updateFrabriquant = async (data: Prisma.FabriquantUpdateInput, id: number) => {
    const fabriquant = await prisma.fabriquant.update({
        where: { Code_fabriquant: id },
        data: {
            Libelle: data.Libelle,
        },
    });
    return fabriquant
}
export const deleteFabriquant = async (id: number) => {
    const fabriquant = await prisma.fabriquant.delete({
        where: { Code_fabriquant: id },
    });
    return fabriquant
}
