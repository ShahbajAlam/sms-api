import { connectDB } from "@/lib/dbConnect";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
    try {
        await connectDB();
        const { id } = params;

        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to delete post" },
            { status: 500 }
        );
    }
}
