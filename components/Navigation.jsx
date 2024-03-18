import React, {useEffect, useState} from 'react';

import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThirdScreen from "../screens/IntroductionScreens/ThirdScreen";
import FirstScreen from "../screens/IntroductionScreens/FirstScreen";
import SecondScreen from "../screens/IntroductionScreens/SecondScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import GetStartedScreen from "../screens/GetStartedScreen";

const BottomTabNavigator = createBottomTabNavigator();
const NativeStackNavigator = createNativeStackNavigator();

const Navigation = () => {
    const [newUser, setNewUser] = useState(false)

    useEffect(() => {
        (async () => {
            const value = await AsyncStorage.getItem('user')
            if (value === null) {
                setNewUser(true)
                return true;
            }
            return false;
        })()
    })

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {newUser === true ? (
                    <NativeStackNavigator.Navigator screenOptions={{headerShown: false}}>
                        <NativeStackNavigator.Screen name="FirstScreen" component={FirstScreen}/>
                        <NativeStackNavigator.Screen name="SecondScreen" component={SecondScreen}/>
                        <NativeStackNavigator.Screen name="ThirdScreen" component={ThirdScreen}/>
                        <NativeStackNavigator.Screen name="GetStartedScreen" component={GetStartedScreen}/>
                    </NativeStackNavigator.Navigator>
                ) : (
                    <BottomTabNavigator.Navigator>
                        <BottomTabNavigator.Screen name="Start" component={HomeScreen}/>
                    </BottomTabNavigator.Navigator>
                )}
            </NavigationContainer>
        </SafeAreaProvider>
    )
};

export default Navigation;