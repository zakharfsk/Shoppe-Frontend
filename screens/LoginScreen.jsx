import React from 'react';
import ArrowBack from "../assets/arrow-left.svg";
import {Container, Title} from "../styles/base.styles";
import {Pressable} from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <Container>
            <Pressable onPress={() => navigation.goBack()}>
                <ArrowBack style={{
                    margin: 24
                }}/>
            </Pressable>
            <Title fontSize={'32'} fontWeight={'bold'}>Login</Title>
        </Container>
    );
};

export default LoginScreen;