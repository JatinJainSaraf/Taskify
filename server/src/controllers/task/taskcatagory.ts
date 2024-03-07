
import { addcatagorybody } from '../../types'
import Views from '../../views'
import { Response } from 'express'

export default async function addCatagoryController({ body: { name, subcategories } }: { body: addcatagorybody }, res: Response) {


    try {

        const addCatagoriesViews = await Views.taskViews.addCatagoriesViews({ name, subcategories })

        res.status(201).json(addCatagoriesViews)


    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}