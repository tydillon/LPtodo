/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'Learn about React', isCompleted: false},
    {text: 'Meet friend for lunch', isCompleted: true},
    {text: 'Build really cool todo app', isCompleted: false},
  ]);

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

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.body}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.app}>
            <View style={styles.todoList}>
              {todos.map((todo, index) => (
                <ToDo
                  key={index}
                  index={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
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
});

export default App;
