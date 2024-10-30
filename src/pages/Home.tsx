import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { cn } from '../libs/utils'

const Home = () => {
  const [mealsData, setMealsData] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  useEffect(() => {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputSearch
      )
      .then((res) => {
        setMealsData(res.data.meals)
      })
  }, [inputSearch])
  return (
    <div className={cn('flex flex-col items-center justify-center')}>
      <h1 className={cn('m-8 text-4xl text-orange-950')}>React Cook</h1>
      <input
        type="text"
        className={cn(
          'rounded-xl p-4 shadow-md outline-none ring-orange-500 focus:ring-1'
        )}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className={cn('mx-80 grid grid-cols-3 gap-4 p-8')}>
        {mealsData &&
          mealsData.slice(0, 24).map((meal: any) => {
            return <Card key={meal.idMeal} meal={meal} />
          })}
      </div>
    </div>
  )
}

export default Home
