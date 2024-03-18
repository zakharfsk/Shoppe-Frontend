import styled from "styled-components/native";
import {log} from "expo/build/devtools/logger";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #121212;
`

export const Title = styled.Text`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || 24}px;
    font-weight: ${props => props.fontWeight || 'normal'};
    margin: ${props => props.fontSize || 24}px;
`

export const Description = styled.Text`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || 16}px;
    font-weight: ${props => props.fontWeight || 'normal'};
    margin: ${props => props.margin || 30}px;
    text-align: ${props => props.textAlign || 'center'};
`