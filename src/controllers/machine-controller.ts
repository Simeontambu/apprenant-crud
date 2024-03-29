import { request, response } from 'express';

import { createMachine, showAllMachines, deleteMachine, updateMachine } from '../services/machine-service';

export const create = async (req: request, res: response) => {
    try {

        const machine = await createMachine({
            model: req.body.model,
            frabriquant: req.body.frabriquant,
            coach: req.body.coach,
        })
        return res.status(201).json({
            Message: "machine create",
            data: machine
        })

    } catch (error) {
        console.error("Error create machine", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const machine = await showAllMachines()
    return res.status(201).json({
        Message: "machine data list",
        data: machine
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const machine = await updateMachine(

            {
                model: req.body.model,
                frabriquant: req.body.frabriquant,
                coach: req.body.coach,
            },
            id

        )
        return res.status(201).json({
            Message: "machine update",
            data: machine
        })

    } catch (error) {

        console.error("Error update machine", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const machine = await deleteMachine(id)
    return res.status(201).json({
        Message: "machine delete",
        data: machine
    })
}