import { request, response } from 'express';

import { createApprenant, showAllApprenant, updateApprenant, deleteApprenant } from '../services/apprennat-service';

export const create = async (req: request, res: response) => {
    try {

        const apprenant = await createApprenant({
            Nom: req.body.nom,
            Postnom: req.body.postnom,
            Prenom: req.body.prenom,
            Date_naissance: req.body.date_naissance,
            Adresse: req.body.adresse,
            Email: req.body.email,
            Telephone: req.body.telephone,
            cohorte: req.body.cohorte,
            machine: req.body.machine,
        })
        return res.status(201).json({
            Message: "apprenant create",
            data: apprenant
        })

    } catch (error) {
        console.error("Error create apprenant", error);
        return res.status(500).json({
            Message: "Error",
        });

    }
}

export const showAll = async (req: request, res: response) => {
    const apprenant = await showAllApprenant()
    return res.status(201).json({
        Message: "apprenant data list",
        data: apprenant
    })
}

export const update = async (req: request, res: response) => {
    try {

        const id = parseInt(req.params.id);
        const apprenant = await updateApprenant(

            {
                Nom: req.body.nom,
                Postnom: req.body.postnom,
                Prenom: req.body.prenom,
                Date_naissance: req.body.date_naissance,
                Adresse: req.body.adresse,
                Email: req.body.email,
                Telephone: req.body.telephone,
                cohorte: req.body.cohorte,
                machine: req.body.machine,
            },
            id

        )
        return res.status(201).json({
            Message: "apprenant update",
            data: apprenant
        })

    } catch (error) {

        console.error("Error update apprenant", error);
        return res.status(500).json({
            Message: "Error",
        });
    }
}

export const remove = async (req: request, res: response) => {
    const id = parseInt(req.params.id);
    const apprenant = await deleteApprenant(id)
    return res.status(201).json({
        Message: "apprenant delete",
        data: apprenant
    })
}