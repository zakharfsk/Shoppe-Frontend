import React, {useState} from 'react';

import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThirdScreen from "../screens/IntroductionScreens/ThirdScreen";
import FirstScreen from "../screens/IntroductionScreens/FirstScreen";
import SecondScreen from "../screens/IntroductionScreens/SecondScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import GetStartedScreen from "../screens/GetStartedScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import AddTaskIcon from "../assets/icons/add_task.svg";
import UserProfileIcon from "../assets/icons/userprofile_page.svg";
import CalendarIcon from "../assets/icons/calendar_page.svg";
import FocusIcon from "../assets/icons/focus_page.svg";
import HomeIcon from "../assets/icons/home_page.svg";
import CalendarScreen from "../screens/CalendarScreen";
import FocusModeScreen from "../screens/FocusModeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import {useAuth} from "../context/AuthContext";


const BottomTabNavigator = createBottomTabNavigator();
const NativeStackNavigator = createNativeStackNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTabNavigator.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: 'rgba(54, 54, 54, 1)',
                borderTopColor: 'rgba(18, 18, 18, 1)'
            },
            headerShown: false,
        }}>
            <BottomTabNavigator.Screen options={{
                tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size}/>
            }} name="Home" component={HomeScreen}/>
            <BottomTabNavigator.Screen options={{
                tabBarIcon: ({color, size}) => <CalendarIcon color={color} size={size}/>
            }} name="Calendar" component={CalendarScreen}/>
            <BottomTabNavigator.Screen options={{
                tabBarIcon: ({color, size}) => <AddTaskIcon color={color} size={size}/>
            }} name="Add task" component={HomeScreen}/>
            <BottomTabNavigator.Screen options={{
                tabBarIcon: ({color, size}) => <FocusIcon color={color} size={size}/>
            }} name="Focuse" component={FocusModeScreen}/>
            <BottomTabNavigator.Screen options={{
                tabBarIcon: ({color, size}) => <UserProfileIcon color={color} size={size}/>
            }} name="Profile" component={UserProfileScreen}/>
        </BottomTabNavigator.Navigator>
    )
}

const NativeTabNavigation = () => {
    return (
        <NativeStackNavigator.Navigator screenOptions={{headerShown: false}}>
            <NativeStackNavigator.Screen name="FirstStep" component={FirstScreen}/>
            <NativeStackNavigator.Screen name="SecondStep" component={SecondScreen}/>
            <NativeStackNavigator.Screen name="ThirdStep" component={ThirdScreen}/>
            <NativeStackNavigator.Screen name="GetStarted" component={GetStartedScreen}/>
            <NativeStackNavigator.Screen name="Register" component={RegisterScreen}/>
            <NativeStackNavigator.Screen name="Login" component={LoginScreen}/>
        </NativeStackNavigator.Navigator>
    )
}

const Navigation = () => {
    const {authState} = useAuth();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaProvider>
                <NavigationContainer>
                    {authState?.authenticated ? (<BottomTabNavigation/>) : (<NativeTabNavigation/>)}
                </NavigationContainer>
            </SafeAreaProvider>
        </TouchableWithoutFeedback>
    )
};

export default Navigation;