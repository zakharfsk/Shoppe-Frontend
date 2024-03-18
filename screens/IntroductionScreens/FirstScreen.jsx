import React from 'react';
import {Text} from "react-native";
import FirstIntroPhoto from "../../assets/introduction/1.svg";
import {
    NavigationButtonLayout,
    NextButton,
    StepCounter
} from "../../styles/introduction.styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Container, Description, Title} from "../../styles/base.styles";


const FirstScreen = ({navigation}) => {
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
            <FirstIntroPhoto style={{marginTop: 90}}/>
            <StepCounter>Step 1 of 3</StepCounter>
            <Title>Manage your tasks</Title>
            <Description>You can easily manage all of your daily tasks in DoMe for free</Description>
            <NavigationButtonLayout>
                <NextButton onPress={() => navigation.navigate('SecondStep')}>
                    <Text style={{color: 'white', fontSize: 16, textTransform: 'uppercase'}}>Next</Text>
                </NextButton>
            </NavigationButtonLayout>
        </Container>
    )
};

export default FirstScreen;