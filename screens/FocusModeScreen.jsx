import React from 'react';
import {Container} from "../styles/base.styles";
import Header from "../components/Header";

const FocusModeScreen = ({navigation}) => {
    return (
        <Container>
            <Header navigation={navigation} text={"Focus Mode"}/>
        </Container>
    );
};

export default FocusModeScreen;