import mongoose from "mongoose";
import crypto from 'crypto';
import { Schema } from "mongoose";


const userSchema = new Schema(
    {
        name: { type: String, required: true },
        contactNo: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        isDelete: { type: Boolean, default: false },
        recoveryCode: { type: String, default: generateRecoveryCode() },
        catagories: mongoose.Types.ObjectId,
        assignTask: String,
        createdTask: String,
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export function generateRecoveryCode(): string {
    return crypto.randomBytes(6).toString('hex');
}

export default UserModel;



