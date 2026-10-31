
import MealCard from './MealCard.jsx'
import useTable from './utils/useTable.jsx'
import { supabase } from './utils/supabase'

import './App.css'
import "@picocss/pico/css/pico.css"
import { useState } from 'react'

function App() {
  const [meals, setMeals] = useState ([])
  const loadMeals = async () => {
  const {data, error} = await supabase.from('meals').select()
    setMeals(data)
  }
    const { data, error, reload } = useTable("meals")


async function addMeal (event) {
    event.preventDefault()
    const form = event.target
    const meal = {
      name: form.mealName.value,
      guest: form.guestName.value,
      servings: Number(form.servings.value),
    }

    const result = await supabase.from("meals").insert(meal)
    if (result.error) {
      console.log(result.error.message)
      return
    }
        form.reset()
    reload()

  }

async function deleteMeal(id) {
  const response = await supabase
    .from('meals')
    .delete()
    .eg('id',id)
}

return (
  <div>
    <h1>Potluck</h1>
    <button onClick={loadMeals}>Load</button>
          <form onSubmit={addMeal}>
        <input type='text' name="mealName" placeholder="Dish" />
        <input type='text' name="guestName" placeholder="Your name" />
        <input type='number' name="servings" />
        <button>Add Meal</button>
      </form>

    <p>{error}</p>
      {data.map((meal) => <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal} />)}

  </div>
)
}

export default App