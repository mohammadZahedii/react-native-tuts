import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/ui/CategoryGridTitle";

export const CategoriesScreen = ({ navigation }) => {
  //render item component
  const renderCategoryItem = (renderData) => {
    const handleNavigate = () => {
      navigation.navigate("MealsItems", { categoryId: renderData.item.id });
    };
    return (
      <CategoryGridTitle
        title={renderData.item.title}
        color={renderData.item.color}
        handlePress={handleNavigate}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
