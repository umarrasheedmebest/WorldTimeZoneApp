import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../AuthProvider";
import {ActivityIndicator} from 'react-native';
import MainContainer from "../modules/Screens/BottomTab/MainContainer";

const AppNavigator = () =>{
    const {user, login} = useContext(AuthContext);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try{
            const retrievedItem = await AsyncStorage.getItem('@user');
            const user = JSON.parse(retrievedItem);
            if(user !== null) {
                login(user);
            }
            setLoading(false);
        }catch (e) {
            console.log('error getting stored data');
        }
    };

    if(loading) {
        return <ActivityIndicator />;
    }

    return(
        <NavigationContainer>
            <MainContainer />
            {/* {user ? <MainNavigator /> : <Auth />} */}
        </NavigationContainer>
    );
};

export default AppNavigator;