import { Response } from "express";
import Views from "../../views";
import { finduserRes } from "@/types";


interface QueryParams {
    id: string;
}

export default async function findUserController(req: finduserRes, res: Response) {

    const id = req.query

    try {
        const findUserViewsRes = await Views.userViews.getUserViews(id.id)


        res.status(200).json(findUserViewsRes)
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}