import React from 'react';
import SecondIntroPhoto from "../../assets/introduction/2.svg";
import {Text} from "react-native";
import {
    BackButton,
    NavigationButtonLayout,
    NextButton,
    StepCounter
} from "../../styles/introduction.styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Container, Description, Title} from "../../styles/base.styles";

const SecondScreen = ({navigation}) => {
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
            <SecondIntroPhoto style={{marginTop: 90}}/>
            <StepCounter>Step 2 of 3</StepCounter>
            <Title>Create daily routine</Title>
            <Description>In Uptodo you can create your personalized routine to stay productive</Description>
            <NavigationButtonLayout>
                <NextButton onPress={() => navigation.navigate('ThirdStep')}>
                    <Text style={{color: 'white', fontSize: 16, textTransform: 'uppercase'}}>Next</Text>
                </NextButton>
                <BackButton onPress={() => navigation.navigate('FirstStep')}>
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

export default SecondScreen;