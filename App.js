// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { padding: 50 },
});
// style={{ borderBottomColor: 'black', borderBottomWidth: 1}}
// flex => distrubuted segment
// return (
//   <View style={{ padding: 50 }}>
//     <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
//       <TextInput
//         placeholder="Course Goal"
//         style={{ width: '80%', borderColor: "black", borderWidth: 1, padding: 10 }}
//       />
//       <Button title="ADD" />
//     </View>
//     <View></View>
//   </View>
// );

// Flatlist dahabüyük şlist element ler için daha iyi, ScrolView e göre (performansıda etkiliyor, more efficient)
{
  /* <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
</ScrollView> */
}
