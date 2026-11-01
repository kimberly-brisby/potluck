function MealCard({ meal, deleteMeal }) {

function handleDelete () {
    deleteMeal(meal.id)
}

return (

    <article>
        <h2>Meal: {meal.name}</h2>
    <p>Guest: {meal.guest} &nbsp;|&nbsp;
        servings: {meal.servings}
    </p>
    <button onClick={handleDelete}>Delete</button>
    </article>
)
}


export default MealCard
