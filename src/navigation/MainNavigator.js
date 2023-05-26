import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../modules/Screens/Home/Home";

const Stack = createNativeStackNavigator();

export const MainNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            header: () => null,
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}