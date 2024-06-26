import { request, response } from 'express';

import { createSession, showAllSessions, updateSession, deleteSession } from '../services/session-service';

export const create = async (req: request, res: response) => {
    try {
        const session = await createSession({
            annee: req.body.annee,
            Type: req.body.type,
            Ville: req.body.ville,
        })
        return res.status(201).json({
            Message: "Session create",
            data: session
        })

    } catch (error) {
        console.error("Error create session", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const session = await showAllSessions()
    return res.status(201).json({
        Message: "Session data list",
        data: session
    })
}

export const update = async (req: request, res: response) => {
    try {

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

    } catch (error) {

        console.error("Error update session", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const session = await deleteSession(id)
    return res.status(201).json({
        Message: "Session deelte",
        data: session
    })
}