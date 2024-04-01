import React from 'react';
import {Text, TextInput} from "react-native";
import SendIcon from '../assets/vuesax_outline_send.svg';
import {Button, Container, Description} from "../styles/base.styles";
import {Formik} from "formik";

const CreateTaskScreen = () => {

    const handleSubmit = async (values) => {
        console.log(values)
    }

    return (
        <Container style={{
            backgroundColor: 'rgba(54, 54, 54, 1)',
        }}>
            <Formik initialValues={{t: ''}} onSubmit={handleSubmit}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <Container>
                        <Description>Title</Description>
                        <TextInput
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <Description>Category</Description>
                        <TextInput
                            onChangeText={handleChange('category')}
                            onBlur={handleBlur('category')}
                            value={values.category}
                        />
                        <Description>Priority</Description>
                        <TextInput
                            onChangeText={handleChange('priority')}
                            onBlur={handleBlur('priority')}
                            value={values.priority}
                        />
                        <Container style={{backgroundColor: 'red'}}>
                            <Button style={{
                                backgroundColor: 'white',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                padding: 10,
                                borderRadius: 10,
                                textAlign: 'center',
                            }}>
                                <SendIcon
                                    width={40}
                                    height={40}
                                />
                            </Button>
                        </Container>
                    </Container>
                )}
            </Formik>
        </Container>
    );
};

export default CreateTaskScreen;