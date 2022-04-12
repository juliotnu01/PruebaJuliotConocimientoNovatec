import { Request, Response } from 'express'

import Comment, { IComments } from '../models/Comments'
import jwt from 'jsonwebtoken';
import { commentsValidation } from '../libs/joi'
export const CreateComments = async (req: Request, res: Response) => {
   // Saving a new Comments
    try {
        const { error } = commentsValidation(req.body);
        if (error) return res.status(400).json(error.message);

        const newComment: IComments = new Comment({
            subject: req.body.subject,
            website: req.body.website,
            text: req.body.text,
            email: req.body.email,
        });
        const savedComment = await newComment.save();
        res.json({status: "ok"});
    } catch (e) {
        res.status(400).json(e);
    }
};