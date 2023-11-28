import React from 'react';
import { SafeAreaView , Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';

function Home({navigation}) {
    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Study'
      ]);
    
      const handleAddTask = (task) => {
        setTasks([...tasks, task]);    
      };
    return (
        <>
            <MainLayout>
                <SafeAreaView>
                    <ToDoList  tasks = {tasks}/>
                    <ToDoForm onAddTask={handleAddTask}  style={{ marginVertical: 20 }}/>

                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                </SafeAreaView>
            </MainLayout>
        </>
    );
}
export default Home;