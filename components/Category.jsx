import React from 'react';
import TestSvg from '../assets/arrow-left.svg';
import {Container, Text} from "../styles/base.styles";

const Category = ({category}) => {
    return (
        <Container additionalStyles={{
            overflow: 'auto',
            borderRadius: '4px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
        }} backgroundColor={'rgba(128, 156, 255, 1.00)'}>
            <TestSvg/>
            <Text>{category}</Text>
        </Container>);
};

export default Category;