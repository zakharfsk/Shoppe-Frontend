import React from 'react';
import {Text, View} from "react-native";
import {Button, Container, Description} from "../styles/base.styles";

const Task = ({title, time, category, priority}) => {
    return (
        <Button additionalStyles={{
            margin: '12px',
            padding: '12px',
            backgroundColor: 'rgba(54, 54, 54, 1)',
            borderRadius: '4px'
        }}>
            <Container style={{backgroundColor: 'rgba(54, 54, 54, 1)'}}>
                <Description margin={"0px"}>
                    {title} {time} {category} {priority}
                </Description>
            </Container>
        </Button>
    );
};

export default Task;