import { Prisma,PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const createSession = async (data: Prisma.SessionCreateInput) => {
    const session = await prisma.session.create({
        data: {
            annee: data.annee,
            Type: data.Type,
            Ville: data.Ville,
        },
    });
    return session
}

export const showAllSessions = async () => {
    const sessions = await prisma.session.findMany();
    return sessions;
};

export const updateSession = async (data: Prisma.SessionUpdateInput, id: number) => {
    const session = await prisma.session.update({
        where: { id: id },
        data: {
            annee: data.annee,
            Type: data.Type,
            Ville: data.Ville,
        },
    });
    return session
}
export const deleteSession = async (id: number) => {
    const session = await prisma.session.delete({
        where: { id: id },
    });
    return session
}
