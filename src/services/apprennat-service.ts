import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createApprenant = async (data: Prisma.ApprennatCreateInput) => {
    const apprenant = await prisma.apprennat.create({
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
    return apprenant
}

export const showAllApprenant = async () => {
    const appranant = await prisma.apprennat.findMany();
    return appranant;
};

export const updateApprenant = async (data: Prisma.ApprennatCreateInput, id: number) => {
    const apprenant = await prisma.apprennat.update({
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
    return apprenant
}
export const deleteApprenant = async (id: number) => {
    const apprenant = await prisma.apprennat.delete({
        where: { Matricule_apprenant: id },
    });
    return apprenant
}
