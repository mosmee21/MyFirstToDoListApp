import React from 'react';  
import {Text ,Button} from 'react-native';

const ChuckNorrisFact = ({ }) => {
const[fact , setFact] = React.useState('This is the Fact.');

const fetchFact = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");

            const json = await response.json();

            const fact = json.value;

            //fact = json.value;

            setFact(fact);

            console.log(fact);
        } catch (err) {
            console.error(err);
        }
    };
    
    React.useEffect(() => {
        fetchFact();
    }, []);

    const handleRefreshPress = () => {
        fetchFact();
    }

    return (
        <>
            <Text style ={{ fontSize: 28, textAlign: 'center', marginTop:10}}>
                {fact}
            </Text>
            <Button title = 'Refresh' onPress = {handleRefreshPress} />
        </>
    );
}

export default ChuckNorrisFact;