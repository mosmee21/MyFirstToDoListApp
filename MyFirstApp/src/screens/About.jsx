import React from 'react';
import {View , Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({}) {
    return (
        <>
            <MainLayout>
                <View>
                    <Text>My To Do List App</Text>
                    <Text>Created by: Mausami Desai</Text>
                    <Text>Version: 0.1.215241</Text>

                </View>
            </MainLayout>
        </>
    );
}

export default About;