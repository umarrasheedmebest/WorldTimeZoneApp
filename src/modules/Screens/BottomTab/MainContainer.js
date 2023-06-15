import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Text,
    View,
    Image,
    keyBoardAvoidingView
} from 'react-native';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SettingScreen from './Screens/SettingScreen/SettingScreen';
import Icon from 'react-native-vector-icons';
import SearchScreen from './Screens/SearchScreen/searchScreen';
import FavouriteScreen from './Screens/FavouriteScreen/favouriteScreen';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                keyBoardAvoidingView,
                tabBarStyle: {
                    height: 80,
                    margin: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    shadowColor: '#52006A',
                    elevation: 24,
                    // backgroundColor:'lightblue'
                },
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../../assets/BottomTabImages/home.png")} style={{
                                tintColor: focused ? '#a103fc' : '#000',
                                width: 27,
                                height: 27
                            }} />
                            <Text style={{
                                color: focused ? '#000' : '#552211',
                                fontSize: 12,
                            }}>Home</Text>

                        </View>
                    )
                }}

            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../../assets/BottomTabImages/search.png")} style={{
                                tintColor: focused ? '#0384fc' : '#000',
                                width: 25,
                                height: 25
                            }} />
                            <Text style={{
                                color: focused ? '#000' : '#552211',
                                fontSize: 12,
                            }}>Search</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen name="Favourite" component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../../assets/BottomTabImages/favourite.png")} style={{
                                tintColor: focused ? '#fc0303' : '#000',
                                width: 25,
                                height: 25
                            }} />
                            <Text style={{
                                color: focused ? '#000' : '#552211',
                                fontSize: 12,
                            }}>Favourite</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen name='Setting' component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../../assets/BottomTabImages/setting.png')} style={{
                                tintColor: focused ? '#fcc203' : '#000',
                                width: 25,
                                height: 25

                            }} />
                            <Text style={{
                                color: focused ? '#000' : '#552211',
                                fontSize: 12,
                            }}>Setting</Text>
                        </View>
                    )
                }}

            />


        </Tab.Navigator>
    )
}