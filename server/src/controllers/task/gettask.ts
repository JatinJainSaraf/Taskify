import { Response, Request } from "express";
import Views from "../../views";
import { gettaskcontrollerreq } from "@/types";

interface QueryParams {
    id: string;
}

export default async function getAllTaskController(req: gettaskcontrollerreq, res: Response) {
    const id: QueryParams = req.query;
    try {
        const getAllTaskViews = await Views.taskViews.getAllTaskViews(id)

        res.status(201).json(getAllTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}