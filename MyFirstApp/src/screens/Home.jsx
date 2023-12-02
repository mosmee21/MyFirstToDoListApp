import React from 'react';
import { SafeAreaView , Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';
import ChuckNorrisFact from '../ChuckNorrisFact';

function Home({navigation}) {
    const [tasks, setTasks] = React.useState([
        "Finish homework",
        "Buy groceries",
        "Walk the dog",
        "Read a book",
        "Do laundry",
        "Exercise",
        "Practice coding",
        "Write a blog post",
        "Call a friend",
        "Water the plants",
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
                    <ChuckNorrisFact />
                </SafeAreaView>
            </MainLayout>
        </>
    );
}
export default Home;