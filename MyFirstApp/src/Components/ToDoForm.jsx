import React from 'react';
import {StyleSheet} from 'react-native';
import {
    View,
    TextInput,
    Button
} from 'react-native';

function ToDoForm({onAddTask ,style}) {
  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    onAddTask(taskText);
    setTaskText(''); // Reset the input field after adding the task
  };

    return (
        <>
        <View style={[styles.form ,style]}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value = {taskText}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
        </>
    );

}
const styles = StyleSheet.create({
form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;