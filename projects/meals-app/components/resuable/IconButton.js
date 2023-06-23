import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ color, name, handlePress, size = 24 }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
