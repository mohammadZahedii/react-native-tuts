import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is the <Text style={styles.highlightedText}>"Welcome!"</Text>{" "}
        screen!
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  highlightedText: {
    color: "#9a2f5d",
  },
});
