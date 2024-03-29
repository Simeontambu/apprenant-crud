import { request, response } from 'express';

import { createFrabriquant, showAllFabriquant, deleteFabriquant, updateFrabriquant } from '../services/fabriquant-service';

export const create = async (req: request, res: response) => {
    try {

        const fabriquant = await createFrabriquant({
            Libelle: req.body.libelle,
        })
        return res.status(201).json({
            Message: "fabriquant create",
            data: fabriquant
        })

    } catch (error) {
        console.error("Error create fabriquant", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const fabriquant = await showAllFabriquant()
    return res.status(201).json({
        Message: "fabriquant data list",
        data: fabriquant
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const fabriquant = await updateFrabriquant(

            {
                Libelle: req.body.libelle,
            },
            id

        )
        return res.status(201).json({
            Message: "fabriquant update",
            data: fabriquant
        })

    } catch (error) {

        console.error("Error update fabriquant", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const fabriquant = await deleteFabriquant(id)
    return res.status(201).json({
        Message: "fabriquant delete",
        data: fabriquant
    })
}