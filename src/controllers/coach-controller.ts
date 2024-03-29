import { request, response } from 'express';

import { createCoach, showAllCoaches, updateCoach, deleteCoach } from '../services/coach-service';

export const create = async (req: request, res: response) => {
    try {

        const coach = await createCoach({
            Nom: req.body.nom,
            Postnom: req.body.postnom,
            Prenom: req.body.prenom,
            Date_naissance: req.body.date_naissance,
            Adresse: req.body.adresse,
            Email: req.body.email,
            Telephone: req.body.telephone
        })
        return res.status(201).json({
            Message: "coach create",
            data: coach
        })

    } catch (error) {
        console.error("Error create coach", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const coach = await showAllCoaches()
    return res.status(201).json({
        Message: "coach data list",
        data: coach
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const coach = await updateCoach(

            {
                Nom: req.body.nom,
                Postnom: req.body.postnom,
                Prenom: req.body.prenom,
                Date_naissance: req.body.date_naissance,
                Adresse: req.body.adresse,
                Email: req.body.email,
                Telephone: req.body.telephone
            },
            id

        )
        return res.status(201).json({
            Message: "coach update",
            data: coach
        })

    } catch (error) {

        console.error("Error update coach", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const coach = await deleteCoach(id)
    return res.status(201).json({
        Message: "coach delete",
        data: coach
    })
}