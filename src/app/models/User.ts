import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
       type: String,
       required: [true, "Please provide a password"],
    },
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema);
