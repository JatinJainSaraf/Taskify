import { addcatagorybody, addtaskbody } from "../../types";
import { RESULT_STATUS } from "../../constants";
import Category from "../../models/taskcatagory";

export default async function addCatagories({ name, subcategories }: addcatagorybody) {
 

    try {

        // Create a new category document with its subcategories
        const category = new Category({ name, subcategories });
        await category.save();



        return {
            status: RESULT_STATUS.SUCCESS,
            message: "Categories added successfully",
            category // Optionally, you can also return the saved category document
        };
    } catch (error) {
        console.error("Error adding categories:", error);
        return {
            status: RESULT_STATUS.ERROR,
            message: "Failed to add categories"
        };
    }
}