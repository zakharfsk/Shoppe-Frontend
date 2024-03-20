import React from 'react';
import {Text, View} from "react-native";
import {Container, Description} from "../styles/base.styles";

const Task = ({title, time, category, priority}) => {
    return (
        <Container style={{backgroundColor: 'rgba(54, 54, 54, 1)'}}>
            <Description>
                {title} {time} {category} {priority}
            </Description>
        </Container>
    );
};

export default Task;