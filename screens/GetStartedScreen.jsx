import React from 'react';
import {Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {
    Container,
    CreateAccountButton,
    Description,
    LoginButton,
    NavigationButtonLayout,
    Title
} from "../styles/introduction.styles";

const GetStartedScreen = () => {
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
            <NavigationButtonLayout>
                <LoginButton>
                    <Text>Login</Text>
                </LoginButton>
                <CreateAccountButton>
                    <Text>Create account</Text>
                </CreateAccountButton>
            </NavigationButtonLayout>
        </Container>
    );
};

export default GetStartedScreen;