import React from 'react';
import {Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {
    CreateAccountButton,
    GetStartedButtonLayout,
    LoginButton
} from "../styles/introduction.styles";
import {Container, Description, Title} from "../styles/base.styles";

const GetStartedScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();

    return (
        <Container style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Title>Welcome to UpTodo</Title>
            <Description>Please login to your account or create new account to continue</Description>
            <GetStartedButtonLayout>
                <LoginButton onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'white', textTransform: 'uppercase'}}>Login</Text>
                </LoginButton>
                <CreateAccountButton onPress={() => navigation.navigate('Register')}>
                    <Text style={{color: 'white', textTransform: 'uppercase'}}>Create account</Text>
                </CreateAccountButton>
            </GetStartedButtonLayout>
        </Container>
    );
};

export default GetStartedScreen;