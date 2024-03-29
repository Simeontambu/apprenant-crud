import { request, response } from 'express';

import { createCohorte, showAllCohortes, updateCohorte, deleteCohorte } from '../services/cohorte-service';

export const create = async (req: request, res: response) => {
    try {

        const cohorte = await createCohorte({
            session: req.body.session,
            Description: req.body.Description,
        })
        return res.status(201).json({
            Message: "cohorte create",
            data: cohorte
        })

    } catch (error) {
        console.error("Error create cohorte", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const cohorte = await showAllCohortes()
    return res.status(201).json({
        Message: "cohorte data list",
        data: cohorte
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const cohorte = await updateCohorte(

            {
                session: req.body.session,
                Description: req.body.Description,
            },
            id

        )
        return res.status(201).json({
            Message: "cohorte update",
            data: cohorte
        })

    } catch (error) {

        console.error("Error update cohorte", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const cohorte = await deleteCohorte(id)
    return res.status(201).json({
        Message: "cohorte delete",
        data: cohorte
    })
}