import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    created: { type: String, default: new Date().toISOString() },
    scheduledFor: { type: String, required: true },
    platforms: { type: [String], required: true },
    image: { type: String, default: null },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
