import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
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
    const changedValue = parseInt(enteredText);
    if (isNaN(changedValue) || changedValue <= 0 || changedValue > 99) {
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
  };
  console.log(enteredText, "TEXT");
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#460425",
    gap: 20,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  numberInput: {
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
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
export default StartGameScreen;
