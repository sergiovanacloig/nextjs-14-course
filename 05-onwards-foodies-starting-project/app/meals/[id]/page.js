export default function MealDetailPage({ params }) {
    return (
        <main>
            <h1>Meal detail page</h1>
            <p>{params.id}</p>
        </main>
    );
}