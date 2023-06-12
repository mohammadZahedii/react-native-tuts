import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../utils";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, guessNumber, handleRestart }) => {
  return (
    <View style={styles.rootScreen}>
      <Title>GAME OVER !</Title>
      <View style={styles.imageHolder}>
        <Image
          style={styles.image}
          source={require("./../../../assets/success.png")}
        />
      </View>
      <Text style={styles.outerText}>
        your phone needed <Text style={styles.innerText}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.innerText}>{guessNumber}</Text>.
      </Text>
      <PrimaryButton handlePress={handleRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    padding: 32,
  },
  imageHolder: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  outerText: {
    fontSize: 24,
    fontFamily: "open-sans",
  },
  innerText: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});

export default GameOverScreen;
