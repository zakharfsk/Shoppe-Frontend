import React from 'react';
import {Container} from "../styles/base.styles";
import Header from "../components/Header";

const CalendarScreen = ({navigation}) => {
    return (
        <Container>
            <Header navigation={navigation} text={"Calendar"}/>
        </Container>
    );
};

export default CalendarScreen;