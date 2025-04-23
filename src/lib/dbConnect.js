import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "test",
        });

        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
};
