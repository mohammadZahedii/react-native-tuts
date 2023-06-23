import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/ui/MealItem";

const MealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const convertedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  const handleRenderMenuItem = (renderData) => {
    const { item } = renderData;
    const renderItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...renderItemsProps} />;
  };

  useLayoutEffect(() => {
    const targetCatTitle = CATEGORIES.find(
      (catItem) => catItem.id === catId
    ).title;

    navigation.setOptions({ title: targetCatTitle });
  }, [catId, navigation]);

  return (
    <View>
      <FlatList
        alwaysBounceVertical={false}
        data={convertedMeals}
        renderItem={handleRenderMenuItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsScreen;
