import Joi from 'joi';

const createUserValidation = Joi.object({
    name: Joi.string().pattern(new RegExp(/^[a-zA-Z][a-zA-Z\s]*$/)).min(3).max(30).required(),
    contactNo: Joi.string().length(10),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)).required(),
    recoverCode: Joi.number().min(3),
    catagories: Joi.string(),
    assignTask: Joi.string(),
    createdTask: Joi.string(),
});

const loginUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)).required(),
});



export { loginUserValidation };


export { createUserValidation };
