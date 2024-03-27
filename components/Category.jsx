import React from 'react';
import {Container, Text} from "../styles/base.styles";

const Category = ({category}) => {
    return (
        <Container>
            <Text>{category}</Text>
        </Container>
    );
};

export default Category;