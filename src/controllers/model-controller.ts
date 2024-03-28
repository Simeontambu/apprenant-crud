import { request, response } from 'express';

import { createModel, showAllModel, deleteModel, updateModel } from '../services/model-service';

export const create = async (req: request, res: response) => {
    try {

        const model = await createModel({
            Libelle: req.body.libelle,
        })
        return res.status(201).json({
            Message: "Model create",
            data: model
        })

    } catch (error) {
        console.error("Error create model", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const model = await showAllModel()
    return res.status(201).json({
        Message: "Model data list",
        data: model
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const model = await updateModel(

            {
                Libelle: req.body.libelle,
            },
            id

        )
        return res.status(201).json({
            Message: "Model update",
            data: model
        })

    } catch (error) {

        console.error("Error update Model", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const model = await deleteModel(id)
    return res.status(201).json({
        Message: "Model delete",
        data: model
    })
}