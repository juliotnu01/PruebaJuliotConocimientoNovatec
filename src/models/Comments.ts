import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs';

export interface IComments extends Document {
    subject: string;
    website: string;
    text: string;
    email: string;
};

const CommentsSchema = new Schema({
    subject: {
        type: String,
        required: true,
        max: 32,
        lowercase: true
    },
    website: {
        type: String,
        required: true,
        lowercase: true,
        max: 32,
    },
    text: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model<IComments>('Comment', CommentsSchema);