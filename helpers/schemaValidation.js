import Joi from "@hapi/joi";

import validation from "express-joi-validation";

const validator = validation.createValidator({});
const PASSWORD_REG_EXP = "(?=.*[0-9])(?=.*[a-z])";

export const schemaValidation = Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(new RegExp(PASSWORD_REG_EXP))
        .required(),
    age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required()
});

export const UserValidation = validator.body(schemaValidation);