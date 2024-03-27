import { Request, Response } from 'express';
import { createSession, showAllSessions, updateSession, deleteSession } from '../services/session-service';

export const create = async (req: Request, res: Response) => {
    const session = await createSession({
        annee: req.body.annee,
        Type: req.body.type,
        Ville: req.body.ville,
    })
    console.log('get')
    return res.status(201).json({
        Message: "Session create",
        data: session
    })
}

export const showAll = async (req: Request, res: Response) => {
    const session = await showAllSessions()
    return res.status(201).json({
        Message: "Session data list",
        data: session
    })
}

export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const session = await updateSession(

        {
            annee: req.body.annee,
            Type: req.body.type,
            Ville: req.body.ville,
        },
        id
    )
    return res.status(201).json({
        Message: "Session update",
        data: session
    })
}

export const remove = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const session = await deleteSession(id)
    return res.status(201).json({
        Message: "Session deelte",
        data: session
    })
}