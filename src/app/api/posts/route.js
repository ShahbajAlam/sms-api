import { connectDB } from "@/lib/dbConnect";
import Post from "@/models/Post";

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find({});
        return Response.json(posts);
    } catch (err) {
        return Response.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, content, scheduledFor, platforms, image } = body;

        if (!title || !content || !scheduledFor || !platforms) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await connectDB();
        const newPost = await Post.create({
            title,
            content,
            scheduledFor: new Date(scheduledFor).toISOString(),
            platforms,
            image,
        });

        return Response.json(
            { message: "Post created successfully", post: newPost },
            { status: 201 }
        );
    } catch (err) {
        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
