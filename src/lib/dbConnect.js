import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
    if (isConnected) return;
    const MONGODB_URI = process.env.MONGO_URI;

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "test",
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error", err);
        throw err;
    }
}
