function MealCard({ meal, deleteMeal }) {

return (
    <div className="card">
    <h2>Meal: {meal.name}</h2>
    <p>Guest: {meal.guest} &nbsp;|&nbsp;
        servings: {meal.servings}
    </p>
    <button onClick={deleteMeal}>Delete</button>
    </div>
)
}

export default MealCard
