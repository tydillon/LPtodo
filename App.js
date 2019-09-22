import React, {Fragment, useState} from 'react';
import ToDo from './src/Schema/ToDo';
import Add from './src/Add/Add';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = input => {
    setTodos([...todos, {text: input, isCompleted: false}]);
  };

  const toggleComplete = index => {
    const current = [...todos];
    if (current[index].isCompleted) {
      current[index].isCompleted = false;
    } else {
      current[index].isCompleted = true;
    }
    setTodos(current);
  };

  const remove = index => {
    const current = [...todos];
    current.splice(index, 1);
    setTodos(current);
  };

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.app}>
            <View style={styles.todoList}>
              <Text style={styles.title}>To-do list</Text>
              {todos.map((todo, index) => (
                <ToDo
                  key={index}
                  index={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  remove={remove}
                />
              ))}
              <Add addToDo={addToDo} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: '10%',
    paddingTop: '50%',
  },
  todoList: {
    backgroundColor: '#1f2561',
    borderRadius: 4,
    padding: '5%',
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    paddingBottom: 5,
    color: 'white',
  },
});

export default App;
