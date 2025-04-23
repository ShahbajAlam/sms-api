export default function HomePage() {
    const baseURL = "https://jcd5sf-3000.bytexl.dev";

    return (
        <main className="api-docs-container">
            <h1>📘 API Documentation</h1>
            <p>
                <strong>Base URL:</strong> {baseURL}
            </p>

            {/* ========== GET All Posts ========== */}
            <section>
                <h2>1. Get All Posts</h2>
                <p>
                    <strong>URL:</strong> {baseURL}/api/posts
                </p>
                <p>
                    <strong>Method:</strong> GET
                </p>
                <p>
                    <strong>Auth required:</strong> No
                </p>
                <p>
                    <strong>Query params:</strong> None
                </p>

                <h4>Response</h4>
                <pre>
                    {`[
  {
    "_id": "string",
    "title": "string",
    "content": "string",
    "scheduledFor": "ISODate",
    "platforms": ["string"],
    "image": "string"
  }
]`}
                </pre>

                <h4>Example Response</h4>
                <pre>
                    {`[
  {
    "_id": "67da9112c9b2faa1e2b40c29",
    "title": "Cover Picture",
    "content": "Update the cover picture",
    "scheduledFor": "Wed Mar 19 2025 10:45:00 GMT+0000 (Coordinated Universal Time)",
    "platforms": ["facebook"],
    "image": "data:image/png;base64, ..."
  }
]`}
                </pre>
            </section>

            {/* ========== POST Create New Post ========== */}
            <section>
                <h2>2. Create a New Post</h2>
                <p>
                    <strong>URL:</strong> {baseURL}/api/posts
                </p>
                <p>
                    <strong>Method:</strong> POST
                </p>
                <p>
                    <strong>Auth required:</strong> No
                </p>
                <p>
                    <strong>Headers:</strong> Content-Type: application/json
                </p>

                <h4>Request Body</h4>
                <pre>
                    {`{
  "title": "string",
  "content": "string",
  "scheduledFor": "ISODate",
  "platforms": ["string"],
  "image": "string (optional)"
}`}
                </pre>

                <h4>Successful Response</h4>
                <pre>
                    {`{
  "message": "Post created successfully",
  "post": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "scheduledFor": "ISODate",
    "platforms": ["string"],
    "image": "string"
  }
}`}
                </pre>

                <h4>Error Responses</h4>
                <pre>
                    {`{ "error": "All fields are required" }
or
{ "error": "Failed to create post" }`}
                </pre>

                <h4>Example Response</h4>
                <pre>
                    {`{
  "message": "Post created successfully",
  "post": {
    "title": "Reel",
    "content": "Share a reel",
    "scheduledFor": "Wed Mar 19 2025 10:45:00 GMT+0000 (Coordinated Universal Time)",
    "platforms": ["instagram"],
    "image": "data:image/png;base64,...",
    "_id": "67f10d2469aa78e2b0529423",
    "__v": 0
  }
}`}
                </pre>
            </section>

            {/* ========== DELETE Post by ID ========== */}
            <section>
                <h2>3. Delete Post by ID</h2>
                <p>
                    <strong>URL:</strong> {baseURL}/api/posts/:id
                </p>
                <p>
                    <strong>Method:</strong> DELETE
                </p>
                <p>
                    <strong>Auth required:</strong> No
                </p>
                <p>
                    <strong>Params:</strong> id (string)
                </p>

                <h4>Successful Response</h4>
                <pre>
                    {`{
  "message": "Post deleted successfully"
}`}
                </pre>

                <h4>Error Responses</h4>
                <pre>
                    {`{ "error": "Post not found" }
or
{ "error": "Failed to delete post" }`}
                </pre>

                <h4>Example Response</h4>
                <pre>
                    {`{
  "message": "Post deleted successfully"
}`}
                </pre>
            </section>
        </main>
    );
}
