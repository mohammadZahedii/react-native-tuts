import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import { useState } from "react";

const GoalInput = ({ onAddItem, visibility, onCloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  //function to change input value
  const goalInputHandler = (textValue) => {
    setEnteredGoalText(textValue);
  };
  //add enteredText value to Goals list
  const addGoalTextHandler = () => {
    if (!enteredGoalText.length) return;
    onAddItem(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color={"#f31282"} onPress={onCloseModal} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalTextHandler}
              color={"#b180f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 40,
    backgroundColor: "#4b3582",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: "40%",
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
});

GoalInput.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default GoalInput;
