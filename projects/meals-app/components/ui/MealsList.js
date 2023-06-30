import { FlatList, View } from "react-native"
import MealItem from "./MealItem"

const MealsList = ({ items }) => {
  const handleRenderMenuItem = (renderData) => {
    const { item } = renderData
    const renderItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return <MealItem {...renderItemsProps} />
  }

  return (
    <View>
      <FlatList
        alwaysBounceVertical={false}
        data={items}
        renderItem={handleRenderMenuItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MealsList
