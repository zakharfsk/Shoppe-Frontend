import styled from "styled-components/native";


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
    text-align: ;
`

export const NavigationButtonLayout = styled.SafeAreaView`
    flex: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
`

export const GetStartedButtonLayout = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    gap: 28px;
`

export const StepCounter = styled.Text`
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    margin: 30px;
`

export const LoginButton = styled.Pressable`
    background-color: rgba(136, 117, 255, 1);
    color: white;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border-radius: 4px;
    margin: 0 20px;
`

export const CreateAccountButton = styled.Pressable`
    background-color: rgba(0, 0, 0, 0);
    color: white;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border: 2px solid rgba(136, 117, 255, 1);
    border-radius: 4px;
    margin: 0 20px;
`