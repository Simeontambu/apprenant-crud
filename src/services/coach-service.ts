import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createCoach = async (data: Prisma.CoachesCreateInput) => {
    const coach = await prisma.coaches.create({
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
    return coach
}

export const showAllCoaches = async () => {
    const coach = await prisma.coaches.findMany();
    return coach;
};

export const updateCoach = async (data: Prisma.CoachesUpdateInput, id: number) => {
    const coach = await prisma.coaches.update({
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
    return coach
}
export const deleteCoach = async (id: number) => {
    const coach = await prisma.coaches.delete({
        where: { Matricule_coach: id },
    });
    return coach
}
