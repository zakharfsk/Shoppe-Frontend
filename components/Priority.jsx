import React from 'react';
import FlagSvg from '../assets/flag.svg';
import {Container, Text} from "../styles/base.styles";

const Priority = ({priority}) => {
    return (
        <Container additionalStyles={{
            flex: 0.3,
            borderWidth: '1px',
            borderRadius: '4px',
            borderColor: 'rgba(134, 135, 231, 1.00)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
        }}  backgroundColor={'rgba(54, 54, 54, 1)'}>
            <FlagSvg width={14} height={14}/>
            <Text>{priority}</Text>
        </Container>
    );
};

export default Priority;