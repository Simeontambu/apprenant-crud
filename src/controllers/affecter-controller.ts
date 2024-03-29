import { request, response } from 'express';

import { createAffecter, showAllAffecter, updateAffecter, deleteAffecter } from '../services/affecter-service';

export const create = async (req: request, res: response) => {
    try {

        const affecter = await createAffecter({
            cohorte: req.body.cohorte,
            coach: req.body.coach,
            Date: req.body.date,
        })
        return res.status(201).json({
            Message: "affecter create",
            data: affecter
        })

    } catch (error) {
        console.error("Error create affecter", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const affecter = await showAllAffecter()
    return res.status(201).json({
        Message: "affecter data list",
        data: affecter
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const affecter = await updateAffecter(

            {
                cohorte: req.body.cohorte,
                coach: req.body.coach,
                Date: req.body.date,
            },
            id

        )
        return res.status(201).json({
            Message: "affecter update",
            data: affecter
        })

    } catch (error) {

        console.error("Error update affecter", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const affecter = await deleteAffecter(id)
    return res.status(201).json({
        Message: "affecter delete",
        data: affecter
    })
}