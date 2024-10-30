import { cn } from '../libs/utils'

const Meal = ({ meal }: any) => {
  return (
    <div
      className={cn(
        'flex h-auto flex-col items-center rounded-xl border-2 border-slate-950 bg-slate-50 p-16'
      )}
    >
      <h2 className={cn('text-2xl font-bold')}>{meal.strMeal}</h2>
      <p>Origin: {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={'photo' + meal.strMeal} />
      <p className={cn('overflow-hidden')}>{meal.strInstructions} </p>
    </div>
  )
}

export default Meal
