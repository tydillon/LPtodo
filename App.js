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
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
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
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#209cee',
  },
  body: {
    backgroundColor: '#209cee',
  },
  app: {
    backgroundColor: '#209cee',
    padding: '10%',
    paddingTop: '50%',
  },
  todoList: {
    backgroundColor: '#e8e8e8',
    borderRadius: 4,
    padding: '5%',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 5,
  },
});

export default App;
