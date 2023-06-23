import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.holder}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  holder: {
    borderBottomWidth: 2,
    borderBottomColor: "#d3a185",
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 20,
    color: "#d3a185",
    textAlign: "center",
    padding: 4,
  },
});
