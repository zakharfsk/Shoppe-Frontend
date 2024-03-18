import React from 'react';
import {Text} from "react-native";
import ThirdIntroPhoto from "../../assets/introduction/3.svg";
import {
    BackButton,
    NavigationButtonLayout,
    NextButton,
    StepCounter
} from "../../styles/introduction.styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Container, Description, Title} from "../../styles/base.styles";

const ThirdScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();

    return (
        <Container style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <ThirdIntroPhoto style={{marginTop: 90}}/>
            <StepCounter>Step 3 of 3</StepCounter>
            <Title>Organize your tasks</Title>
            <Description>You can organize your daily tasks by adding your tasks into separate categories</Description>
            <NavigationButtonLayout>
                <NextButton onPress={() => navigation.navigate('GetStarted')}>
                    <Text style={{color: 'white', fontSize: 16, textTransform: 'uppercase'}}>Get Started</Text>
                </NextButton>
                <BackButton onPress={() => navigation.navigate('SecondStep')}>
                    <Text style={{
                        color: 'rgba(255, 255, 255, 0.44)',
                        fontSize: 16,
                        textTransform: 'uppercase'
                    }}>Back</Text>
                </BackButton>
            </NavigationButtonLayout>
        </Container>
    )
};

export default ThirdScreen;