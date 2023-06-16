import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({ title, color }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressBtn : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" ? "hidden" : " visible",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },
  button: {
    flex: 1,
    // borderRadius: 8,
  },
  pressBtn: {
    opacity: 0.5,
  },
  textItem: {},
});
export default CategoryGridTitle;
