import React from 'react';
import {Container} from "../styles/base.styles";
import Header from "../components/Header";

const UserProfileScreen = ({navigation}) => {
    return (
        <Container>
            <Header navigation={navigation} text={"User Profile"}/>
        </Container>
    );
};

export default UserProfileScreen;