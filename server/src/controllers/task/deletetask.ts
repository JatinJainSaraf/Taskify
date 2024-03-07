import { Response } from "express";
import { deletetaskbody } from "../../types";
import Views from "../../views";


export default async function deleteTaskController({ query: { id } }: { query: deletetaskbody }, res: Response) {



    try {
        const deleteTaskViews = await Views.taskViews.deleteTaskViews({ id })

        res.status(201).json(deleteTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}