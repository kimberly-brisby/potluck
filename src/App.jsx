import MealCard from './MealCard.jsx'
import useTable from './utils/useTable.jsx'


import './App.css'
import "@picocss/pico/css/pico.css"

function App() {
  const { data, error } = useTable("meals")




return (
  <div>
    <h1>Potluck</h1>
    <p>{error}</p>
      {data.map((meal) => <MealCard key={meal.id} meal={meal} />)}

  </div>
)
}

export default App