import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function GoalsList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  //handler for open  modal
  const startAddGoalItem = () => {
    setIsModalVisible(true);
  };
  //handler for close modal
  const endAddGoalItem = () => {
    setIsModalVisible(false);
  };
  //function for add any Goal item
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((crt) => [
      ...crt,
      { id: Math.round(Math.random() * 10000), value: enteredGoalText },
    ]);
    //close modal
    endAddGoalItem();
  };
  //handler of delete individual item
  const deleteGoalHandler = (id) => {
    setCourseGoals((crt) => {
      return crt.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Start Add Goal!"
          color={"#a065ec"}
          onPress={startAddGoalItem}
        />
        <GoalInput
          onAddItem={addGoalHandler}
          visibility={isModalVisible}
          onCloseModal={endAddGoalItem}
        />
        {courseGoals.length ? <View style={styles.divider} /> : null}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(renderData) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHandler}
                  id={renderData.item.id}
                  value={renderData.item.value}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 20,
    padding: 50,
    paddingHorizontal: 16,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
});
