import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Todo = ({todo, toggleComplete, index, remove}) => (
  <View style={styles.todo}>
    <View>
      <Text
        style={{
          textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
        }}>
        {todo.text}
      </Text>
    </View>
    <View style={styles.buttons}>
      <Button title="✓" onPress={() => toggleComplete(index)} />
      <Button title="X" onPress={() => remove(index)} />
    </View>
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
    flexDirection: 'row',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
});
