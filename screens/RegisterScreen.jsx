import React, {useState} from 'react';
import ArrowBack from "../assets/arrow-left.svg";
import {Button, Container, FieldsLayout, Title} from "../styles/base.styles";
import {Pressable, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    confirmPassword: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required')
        .equals([Yup.ref('password')], 'Passwords must match')
});


const RegisterScreen = ({navigation}) => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const insets = useSafeAreaInsets();

    const handleSubmitForm = async (values) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify({
                username: values.username,
                password: values.password
            }))
            navigation.navigate('Login')
        } catch (e) {
            console.log(e)
        }
    }

    const validateChanges = async (errors) => {
        if (errors.username.length >= 5 &&
            errors.password.length >= 5 &&
            errors.confirmPassword.length >= 5 &&
            errors.confirmPassword === errors.password) {
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
                <Title fontSize={'32px'} fontWeight={'bold'} margin={"12px"}>Register</Title>
            </View>
            <Formik
                initialValues={{username: '', password: '', confirmPassword: ''}}
                onSubmit={handleSubmitForm}
                validationSchema={RegisterSchema}
                validate={validateChanges}>
                {({handleChange, handleBlur, handleSubmit, values, errors}) => {
                    console.log(errors)
                    return (
                        <FieldsLayout>
                            <View>
                                <Title margin={"0px"} style={{marginBottom: 8}}>Username</Title>
                                <TextInput
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
                            <View style={{margin: 0, padding: 0}}>
                                <Title margin={"0"} style={{marginBottom: 8}}>Confirm Password</Title>
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(29, 29, 29, 1)',
                                        padding: 15,
                                        color: 'white',
                                        borderRadius: 4
                                    }}
                                    placeholder={"Confirm your Password"}
                                    placeholderTextColor={"rgba(83, 83, 83, 1)"}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}/>
                            </View>
                            <View>
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
                                    >Register</Title>
                                </Button>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                gap: 5,
                                rowGap: 5,
                                marginTop: 25
                            }}>
                                <Title color={"rgba(151, 151, 151, 1)"} fontSize={"12px"} margin={"0px"}>
                                    Already have an account?
                                </Title>
                                <Button onPress={() => navigation.navigate('Login')}>
                                    <Title
                                        margin={"0px"}
                                        fontSize={"12px"}
                                        color={'rgba(255, 255, 255, 0.87)'}
                                    >Login</Title>
                                </Button>
                            </View>
                        </FieldsLayout>
                    )
                }}
            </Formik>
        </Container>
    );
};

export default RegisterScreen;