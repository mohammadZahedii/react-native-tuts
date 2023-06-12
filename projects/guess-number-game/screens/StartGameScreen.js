import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PropTypes from "prop-types";
import { colors } from "../utils";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/card";
import InstructionTitle from "../components/ui/instructionTitle";

const StartGameScreen = ({ handlePickScreenNumber }) => {
  const [enteredText, setEnteredText] = useState("");

  //change input value handler
  const inputValueHandler = (text) => {
    setEnteredText(text);
  };
  //reset input value handler
  const resetInputValueHandler = () => {
    setEnteredText("");
  };

  //confirm input value handler
  const confirmInputValueHandler = () => {
    const choosenValue = parseInt(enteredText);
    if (isNaN(choosenValue) || choosenValue <= 0 || choosenValue > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputValueHandler,
          },
        ]
      );
      return;
    }
    handlePickScreenNumber(choosenValue);
  };
  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionTitle>Enter a Number</InstructionTitle>
        <TextInput
          style={styles.numberInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredText}
          onChangeText={inputValueHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlePress={resetInputValueHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlePress={confirmInputValueHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
    gap: 20,
    alignItems: "center",
  },
  numberInput: {
    borderBottomColor: colors.accent500,
    color: colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});

StartGameScreen.propTypes = {
  handlePickScreenNumber: PropTypes.func.isRequired,
};
export default StartGameScreen;
