import { View, StyleSheet, Button, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PropTypes from "prop-types";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const generateNumBetweenNumbers = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    generateNumBetweenNumbers(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, handleBack }) => {
  const initialGuessValue = generateNumBetweenNumbers(
    minBoundary,
    maxBoundary,
    userNumber
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuessValue);

  const nextGuessHandler = (direction) => {
    //direction could be lower or greater
    if (
      (direction === "lower" && userNumber > currentGuess) ||
      (direction === "greater" && userNumber < currentGuess)
    ) {
      Alert.alert("Don't Lie!", "you know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandom = generateNumBetweenNumbers(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandom);
  };

  return (
    <View style={styles.container}>
      <Button title="back" onPress={handleBack} />
      <Title>Opponents Guess</Title>
      <NumberContainer>{"" + currentGuess}</NumberContainer>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton handlePress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton handlePress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 30,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    flex: 1,
  },
});

GameScreen.proptypes = {
  userNumber: PropTypes.string.isRequired,
};
export default GameScreen;
