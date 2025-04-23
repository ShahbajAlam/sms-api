import { connectDB } from "@/lib/dbConnect";
import Post from "@/models/Post";

export async function DELETE(_, { params }) {
    try {
        await connectDB();
        const { id } = params;

        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return Response.json({ error: "Post not found" }, { status: 404 });
        }

        return Response.json({ message: "Post deleted successfully" });
    } catch (err) {
        return Response.json(
            { error: "Failed to delete post" },
            { status: 500 }
        );
    }
}
