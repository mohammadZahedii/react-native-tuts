import { MEALS } from "../data/dummy-data"
import { useSelector } from "react-redux"
import MealsList from "../components/ui/MealsList"

const FavoritesScreen = () => {
  const favoriteIds = useSelector((state) => state.favorites.ids)

  const selectedFavorites = MEALS.filter((mealItem) =>
    favoriteIds.includes(mealItem.id)
  )
  return <MealsList items={selectedFavorites} />
}

export default FavoritesScreen
