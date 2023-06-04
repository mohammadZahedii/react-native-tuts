import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (textValue) => {
    setEnteredGoalText(textValue);
  };

  const addGoalHandler = () => {
    setCourseGoals((crt) => [
      ...crt,
      { id: Math.round(Math.random() * 10000), value: enteredGoalText },
    ]);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style={styles.divider} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(renderData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{renderData.item.value}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 20,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    maxHeight: 50,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    height: "100%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 16,
    margin: 8,
    backgroundColor: "#211781",
    borderRadius: 8,
  },
  goalText: {
    color: "white",
  },
});
