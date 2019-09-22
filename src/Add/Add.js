import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const AddForm = ({addToDo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      addToDo(value);
      setValue('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Button
        style={styles.buttons}
        title="Add new item"
        color="white"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 30,
  },
  buttons: {
    backgroundColor: 'white',
  },
});
