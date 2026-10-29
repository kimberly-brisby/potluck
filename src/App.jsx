import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase.js'
import MealCard from './MealCard.jsx'
import './App.css'
import "@picocss/pico/css/pico.css"

function App() {
  const [meal, setMeal] = useState([])

  const loadMeal = async () => {
    const { data, error } = await supabase.from("meals").select()
    if (error) {
      console.log(error.message)
      return
    }
    console.log(data)
    setMeal(data)
  }

  

  return (
    <div>
      <h1>Potluck</h1>
      <button onClick={loadMeal}>Load</button>
      {meal.map((meal) => <MealCard key={meal.id} meal={meal} />)}

    </div>
  )
}

export default App