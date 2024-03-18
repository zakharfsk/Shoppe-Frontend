import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #121212;
`

export const NextButton = styled.Pressable`
    background-color: rgba(136, 117, 255, 1);
    color: white;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 4px;
    margin: 0 20px;
`

export const BackButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    margin: 0 20px;
`

export const NavigationButtonLayout = styled.SafeAreaView`
    flex: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
`

export const StepCounter = styled.Text`
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    margin: 30px;
`

export const Title = styled.Text`
    color: white;
    font-size: 32px;
    margin: 30px;
`

export const Description = styled.Text`
    color: white;
    font-size: 16px;
    margin: 30px;
    text-align: center;
`

export const LoginButton = styled.Pressable`
    background-color: rgba(136, 117, 255, 1);
    color: white;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 4px;
    margin: 0 20px;
`

export const CreateAccountButton = styled.Pressable`
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    margin: 0 20px;
`