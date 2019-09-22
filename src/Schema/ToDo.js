import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Todo = ({todo, toggleComplete, index}) => (
  <View style={styles.todo}>
    <Text
      style={{textDecorationLine: todo.isCompleted ? 'line-through' : 'none'}}>
      {todo.text}
    </Text>
    <Button title="Done" onPress={() => toggleComplete(index)} />
  </View>
);

export default Todo;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#fff',
    padding: '3% 10%',
    fontSize: 12,
    marginBottom: 6,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
