export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog post page</h1>
            <p>{params.id}</p>
        </main>
    );
}