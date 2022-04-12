import Joi from '@hapi/joi';
import {IUser} from '../models/User'
import {IComments} from '../models/Comments'

export const signupValidation = (data: IUser) => {
    const userSchema = Joi.object({
        username: Joi
            .string()
            .min(8)
            .max(32)
            .required(),
        email: Joi
            .string()
            .email()
            .required(),
        password: Joi
            .string()
            .max(32)
            .min(8)
            .required()

    });
    return userSchema.validate(data);
};

export const signinValidation = (data: IUser) => {
    const userSchema = Joi.object({
        email: Joi
            .string()
            .max(32)
            .min(8)
            .email()
            .required(),
        password: Joi
            .string()
            .max(32)
            .min(8)
            .required()
    });
    return userSchema.validate(data);
};


export const commentsValidation = (data: IComments) => {
    const commentsSchema = Joi.object({
        subject: Joi
            .string()
            .max(32)
            .min(8)
            .required(),
        website: Joi
            .string()
            .max(32)
            .min(8)
            .required(),
        text: Joi
            .string()
            .max(32)
            .min(8)
            .required(),
        email: Joi
            .string()
            .email()
            .max(32)
            .min(8)
            .required()
    });
    return commentsSchema.validate(data);
};



