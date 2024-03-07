import Joi from 'joi';


const addtaskValidation = Joi.object({

    title: Joi.string().required(),
    description: Joi.string().required(),
    subCatagory: Joi.string().required(),
    status: Joi.string().valid('ToDo', 'In Progress', 'On Hold', 'Cancelled', 'Completed').required(),
    priority: Joi.string().valid('low', 'medium', 'high').required()

});
export { addtaskValidation }

const edittaskvalidation = Joi.object({

    title: Joi.string().required(),
    description: Joi.string().required(),
    subCatagory: Joi.string().required(),
    status: Joi.string().valid('ToDo', 'In Progress', 'On Hold', 'Cancelled', 'Completed').required(),
    priority: Joi.string().valid('low', 'medium', 'high').required()

});
export { edittaskvalidation }