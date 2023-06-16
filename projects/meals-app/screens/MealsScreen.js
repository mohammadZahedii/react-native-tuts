import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/ui/MealItem";

const MealsScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const convertedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  const handleRenderMenuItem = (renderData) => {
    const { item } = renderData;
    const renderItemsProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...renderItemsProps} />;
  };

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
