import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        subCatagory: { type: String, required: true },
        userId: mongoose.Types.ObjectId,
        assignUserId: mongoose.Types.ObjectId,
        status: {
            type: String, enum: ['ToDo', 'In Progress', 'On Hold', 'Cancelled', 'Completed'], default: 'ToDo'
        },
        priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
        estimateTime: String,
        inprogressTime: String,
        isDeleted: { type: Boolean, default: false },
    }, {
    timestamps: true,
}
);

const TaskModel = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default TaskModel;