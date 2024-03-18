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
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

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
                        <NativeStackNavigator.Screen name="FirstStep" component={FirstScreen}/>
                        <NativeStackNavigator.Screen name="SecondStep" component={SecondScreen}/>
                        <NativeStackNavigator.Screen name="ThirdStep" component={ThirdScreen}/>
                        <NativeStackNavigator.Screen name="GetStarted" component={GetStartedScreen}/>
                        <NativeStackNavigator.Screen name="Login" component={LoginScreen}/>
                        <NativeStackNavigator.Screen name="Register" component={RegisterScreen}/>
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