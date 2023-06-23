import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "../resuable/MealDetail";

const MealItem = ({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  id,
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedBtn : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  button: {
    flex: 1,
  },
  pressedBtn: {
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default MealItem;
