import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createModel = async (data: Prisma.ModelCreateInput) => {
    const model = await prisma.model.create({
        data: {
            Libelle: data.Libelle,
        },
    });
    return model
}

export const showAllModel = async () => {
    const model = await prisma.model.findMany();
    return model;
};

export const updateModel = async (data: Prisma.ModelUpdateInput, id: number) => {
    const model = await prisma.model.update({
        where: { Code_modele: id },
        data: {
            Libelle: data.Libelle,
        },
    });
    return model
}
export const deleteModel = async (id: number) => {
    const model = await prisma.model.delete({
        where: { Code_modele: id },
    });
    return model
}
