import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  const cancelGoalHandler = () => {
    props.onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* <Button title="ADD" onPress={()=> props.onAddGoal(enteredGoal)} />  Option 1,  and option 2 => props.onAddGoal.bind(this, enteredGoal) */}

        <View style={styles.buttonContainer}>
          <View style={styles.buttonCancel}>
            <Button title="CANCEL" color="red" onPress={cancelGoalHandler} />
          </View>
          <View style={styles.buttonAdd}>
            <Button title="ADD" onPress={addGoalHandler} />
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
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-between",
    width: "60%",
  },
  buttonCancel: {
    width: "40%",
  },
  buttonAdd: {
    width: "40%",
  },
});

export default GoalInput;

// Button styles are  equal with each other. (Parent is 60% and then child is its 40% )