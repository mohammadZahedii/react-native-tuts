import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/ui/CategoryGridTitle";
import { StatusBar } from "expo-status-bar";

const renderCategoryItem = (renderData) => {
  return (
    <>
      <StatusBar style="light" />
      <CategoryGridTitle
        title={renderData.item.title}
        color={renderData.item.color}
      />
    </>
  );
};

export const CategoriesScreen = () => {
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
