import mongoose from "mongoose";



const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // the user id taken from the db
        ref: "User", // the reference of the collection in the mongoDB.
        reuired: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Task = mongoose.model("Task", schema);