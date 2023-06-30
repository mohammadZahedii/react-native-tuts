import { useLayoutEffect } from "react"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealsList from "../components/ui/MealsList"

const MealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const convertedMeals = MEALS.filter((mealItem) => {
    // return mealItem.categoryIds.indexOf(catId) !== -1
    return mealItem.categoryIds.includes(catId)
    // return catId.includes(mealItem.categoryIds)
  })

  useLayoutEffect(() => {
    const targetCatTitle = CATEGORIES.find(
      (catItem) => catItem.id === catId
    ).title

    navigation.setOptions({ title: targetCatTitle })
  }, [catId, navigation])

  return <MealsList items={convertedMeals} />
}

export default MealsScreen
