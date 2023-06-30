import { useEffect } from "react"
import { Text, View, StyleSheet, Image, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import Subtitle from "../components/resuable/Subtitle"
import MealDetails from "../components/resuable/MealDetail"
import List from "../components/resuable/List"
import IconButton from "../components/resuable/IconButton"
import { useFavoriteContext } from "../store/context"
import { useDispatch, useSelector } from "react-redux"
import { actionManageFavorites } from "../store/redex/slices/favorites"

const MealDetailsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const favoriteIds = useSelector((state) => state.favorites.ids)

  // const { ids, manageFavorites } = useFavoriteContext()
  const targetMealId = route.params.mealId
  const targetMeal = MEALS.find((mealItem) => mealItem.id === targetMealId)

  const isFavoriteMeal = favoriteIds.indexOf(targetMealId) >= 0

  const addToFavoriteHandler = () => {
    // manageFavorites(targetMealId)
    dispatch(actionManageFavorites(targetMealId))
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isFavoriteMeal ? "star" : "star-outline"}
            color={"white"}
            handlePress={addToFavoriteHandler}
          />
        )
      },
    })
  }, [navigation, isFavoriteMeal, addToFavoriteHandler])

  return (
    <ScrollView style={styles.rootScroll}>
      <View style={styles.rootScreen}>
        <Image style={styles.image} source={{ uri: targetMeal.imageUrl }} />
        <Text style={styles.title}>{targetMeal.title}</Text>
        {/* meal details */}
        <MealDetails
          duration={targetMeal.duration}
          complexity={targetMeal.complexity}
          affordability={targetMeal.affordability}
          textColor={styles.detailColor}
        />
        <View style={styles.mealContainer}>
          {/* meal ingredients */}
          <Subtitle>ingredients</Subtitle>
          <List data={targetMeal.ingredients} />
          {/* meal steps */}
          <Subtitle>steps</Subtitle>
          <List data={targetMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootScroll: {
    marginBottom: 10,
  },
  rootScreen: {
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  detailColor: {
    color: "white",
  },
  mealContainer: {
    width: "80%",
  },
})

export default MealDetailsScreen
