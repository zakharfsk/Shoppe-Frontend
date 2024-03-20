import React from 'react';
import {Container} from "../styles/base.styles";
import Header from "../components/Header";

const UserProfileScreen = () => {
    return (
        <Container>
            <Header text={"User Profile"}/>
        </Container>
    );
};

export default UserProfileScreen;