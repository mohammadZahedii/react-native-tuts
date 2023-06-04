import { View, Text, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";

const GoalItem = ({ value, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "#715596" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{value}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 1,
    backgroundColor: "#351f98",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 14,
  },
});

GoalItem.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
