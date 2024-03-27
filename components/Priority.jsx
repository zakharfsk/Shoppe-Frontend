import React from 'react';
import FlagSvg from '../assets/flag.svg';
import {Container, Text} from "../styles/base.styles";

const Priority = ({priority}) => {
    return (
        <Container additionalStyles={{
            // borderColor: priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green',
            borderWidth: '1px',
            padding: '8px 4px',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            <FlagSvg width={14} height={14}/>
            <Text>{priority}</Text>
        </Container>
    );
};

export default Priority;