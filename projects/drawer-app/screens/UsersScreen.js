import { StyleSheet, Text, View } from "react-native";

const UsersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is the <Text style={styles.highlightedText}>"Users"</Text> screen!
      </Text>
    </View>
  );
};

export default UsersScreen;

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
