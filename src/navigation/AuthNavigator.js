import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../modules/Screens/Home/Home";
import Test from "../modules/Screens/Test";


const Stack = createNativeStackNavigator();

export const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            header: () => null,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Test" component={Test} />
            

        </Stack.Navigator>
    );
};