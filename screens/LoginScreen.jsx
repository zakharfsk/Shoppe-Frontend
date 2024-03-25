import React, {useState} from 'react';
import ArrowBack from "../assets/arrow-left.svg";
import {Button, Container, FieldsLayout, Title} from "../styles/base.styles";
import {Alert, Pressable, TextInput, View} from "react-native";
import {Formik} from "formik";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import * as Yup from 'yup';
import {Toast} from "react-native-ui-lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAuth} from "../context/AuthContext";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required')
});


const LoginScreen = ({navigation}) => {
    const {onLogin} = useAuth();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const insets = useSafeAreaInsets();

    const handleSubmitForm = async (values) => {
        await onLogin(values.username, values.password)
    }

    const validateChanges = async (errors) => {
        if (errors.username.length >= 5 && errors.password.length >= 5) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    return (
        <Container style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            gap: 30
        }}>
            <View>
                <Pressable onPress={() => navigation.goBack()}>
                    <ArrowBack style={{margin: 24}}/>
                </Pressable>
                <Title fontSize={'32px'} fontWeight={'bold'} margin={"12px"}>Login</Title>
            </View>
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={handleSubmitForm}
                validationSchema={LoginSchema}
                validate={validateChanges}>
                {({handleChange, handleBlur, handleSubmit, values, errors}) => {
                    return (
                        <FieldsLayout>
                            <View>
                                <Title margin={"0px"} style={{marginBottom: 8}}>Username</Title>
                                <TextInput
                                    name={"username"}
                                    style={{
                                        backgroundColor: 'rgba(29, 29, 29, 1)',
                                        padding: 15,
                                        color: 'white',
                                        borderRadius: 4
                                    }}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    placeholder={"Enter your Username"}
                                    placeholderTextColor={"rgba(83, 83, 83, 1)"}
                                />
                            </View>
                            <View>
                                <Title margin={"0"} style={{marginBottom: 8}}>Password</Title>
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(29, 29, 29, 1)',
                                        padding: 15,
                                        color: 'white',
                                        borderRadius: 4
                                    }}
                                    placeholder={"Enter your Password"}
                                    placeholderTextColor={"rgba(83, 83, 83, 1)"}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}/>
                            </View>
                            <Button
                                onPress={handleSubmit}
                                padding={'0px'}
                                style={{
                                    marginTop: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                disabled={buttonDisabled}
                                backgroundColor={buttonDisabled && 'rgba(134, 135, 231, 0.5)' || 'rgba(134, 135, 231, 1)'}>
                                <Title
                                    margin={"12px 24px"}
                                    fontSize={"16px"}
                                    color={buttonDisabled && 'rgba(255, 255, 255, 0.5)' || 'rgba(255, 255, 255, 0.87)'}
                                >Login</Title>
                            </Button>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                gap: 5
                            }}>
                                <Title color={"rgba(151, 151, 151, 1)"} fontSize={"12px"} margin={"0px"}>
                                    Don’t have an account?
                                </Title>
                                <Button onPress={() => navigation.navigate('Register')}>
                                    <Title
                                        margin={"0px"}
                                        fontSize={"12px"}
                                        color={'rgba(255, 255, 255, 0.87)'}
                                    >Register</Title>
                                </Button>
                            </View>
                        </FieldsLayout>
                    )
                }}
            </Formik>
        </Container>
    )
}

export default LoginScreen;