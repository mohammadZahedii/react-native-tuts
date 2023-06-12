import { View, StyleSheet, Button, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/card";
import InstructionTitle from "../components/ui/instructionTitle";
import { Ionicons } from "@expo/vector-icons";
import GuessOpponentsItem from "../components/game/guessOpponentsItem";

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
const GameScreen = ({ userNumber, handleBack, onGameOver }) => {
  const initialGuessValue = useMemo(() => {
    return generateNumBetweenNumbers(minBoundary, maxBoundary, userNumber);
  }, []);

  const [currentGuess, setCurrentGuess] = useState(initialGuessValue);
  const [guessRounds, setGuessRounds] = useState([initialGuessValue]);

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
    const newRandom = generateNumBetweenNumbers(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandom);
    setGuessRounds((crt) => [newRandom, ...crt]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsListItemsLength = guessRounds.length;
  return (
    <View style={styles.container}>
      <Button title="back" onPress={handleBack} />
      <Title>Opponents Guess</Title>
      <NumberContainer>{"" + currentGuess}</NumberContainer>
      <Card>
        <InstructionTitle>Higher or lower?</InstructionTitle>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton handlePress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton handlePress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.guessItemsContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(renderData) => (
            <GuessOpponentsItem
              roundNumber={guessRoundsListItemsLength - renderData.index}
              guessValue={renderData.item}
            />
          )}
          keyExtractor={(item) => {
            return item;
          }}
        />
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
  guessItemsContainer: {
    flex: 1,
    padding: 20,
  },
});

GameScreen.proptypes = {
  userNumber: PropTypes.string.isRequired,
};
export default GameScreen;
