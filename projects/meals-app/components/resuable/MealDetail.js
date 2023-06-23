import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ textColor, duration, complexity, affordability }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={textColor}>{duration}m</Text>
      <Text style={textColor}>{complexity.toUpperCase()}</Text>
      <Text style={textColor}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
});
