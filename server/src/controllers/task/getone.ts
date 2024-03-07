import { Response, Request } from "express";
import Views from "../../views";
import { getonetaskbody } from "../../types";



export default async function getonetaskController({ query: { id } }: { query: getonetaskbody }, res: Response) {

    try {
        const getOneTaskViews = await Views.taskViews.getOneTaskViews({ id })

        res.status(201).json(getOneTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}