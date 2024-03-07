import mongoose from "mongoose";



// schema for subCatagory
const subcategorySchema = new mongoose.Schema({
    id: Number,
    name: String
});


// schema for cataagory
const categorySchema = new mongoose.Schema({
    name: String,
    subcategories: [subcategorySchema] 
});


const Category = mongoose.model('Category', categorySchema);




export default Category;
