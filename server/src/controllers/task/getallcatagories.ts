import { Response, Request } from "express";
import Views from "../../views";



export default async function getAllCatagoriesController(req: Request, res: Response) {

    try {
        const getAllTaskViews = await Views.taskViews.getAllCatagoriesViews()

        res.status(201).json(getAllTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}