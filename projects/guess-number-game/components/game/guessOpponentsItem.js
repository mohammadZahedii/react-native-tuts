import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

const GuessOpponentsItem = ({ roundNumber, guessValue }) => {
  return (
    <View style={styles.guessItem}>
      <Text style={styles.guessItemText}># {roundNumber}</Text>
      <Text style={styles.guessItemText}>Opponent's Guess : {guessValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guessItem: {
    borderWidth: 1,
    borderColor: colors.primary800,
    backgroundColor: colors.accent500,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 40,
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    marginVertical: 6,
  },
  guessItemText: {
    fontFamily: "open-sans",
  },
});

export default GuessOpponentsItem;
