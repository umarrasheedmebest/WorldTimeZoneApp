import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../modules/Screens/Home/Home";
import Test from "../modules/Screens/Test";
import MainContainer from "../modules/Screens/BottomTab/MainContainer";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';
    switch (routeName) {
        case 'Home':
            return 'Home Screen';
        case 'Setting':
            return 'Setting Screen';
    }
}

export const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            header: () => null,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Home Screen" component={MainContainer}
            options={({route}) => ({
                headerTitle: getHeaderTitle(route),
            })}
            /> 
            
        </Stack.Navigator>
    );
};