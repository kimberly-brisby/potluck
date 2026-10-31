function MealCard({ meal }) {
return (
    <article>
    <h2>{meal.name}</h2>
    <p>Brought by {meal.guest}</p>
    </article>
)
}

export default MealCard
