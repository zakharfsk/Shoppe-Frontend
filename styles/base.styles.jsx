import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #121212;
`

export const Title = styled.Text`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || '24px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    margin: ${props => props.margin || '24px'};
    ${props => props.additionalStyles};
`

export const Description = styled.Text`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || "16px"};
    font-weight: ${props => props.fontWeight || 'normal'};
    margin: ${props => props.margin || "30px"};
    text-align: ${props => props.textAlign || 'center'};
`

export const FieldsLayout = styled.SafeAreaView`
    flex: 1;
    margin: 12px;
    gap: 25px;
`

export const Button = styled.TouchableOpacity`
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    background-color: ${props => props.backgroundColor || 'rgba(0, 0, 0, 0)'};
    ${props => props.additionalStyles};
`