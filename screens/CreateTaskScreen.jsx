import React from 'react';
import {ScrollView, Text, TextInput} from "react-native";
import SendIcon from '../assets/vuesax_outline_send.svg';
import {Button, Container, Title} from "../styles/base.styles";
import {Formik} from "formik";

const CreateTaskScreen = () => {

    const handleSubmit = async (values) => {
        console.log(values)
    }

    return (
        <Container backgroundColor={'rgba(54, 54, 54, 1)'} style={{flex: 1}}>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <Container backgroundColor={'rgba(54, 54, 54, 1)'}>
                        <ScrollView style={{padding: 12}}>
                            <Title>Title</Title>
                            <TextInput
                                style={{backgroundColor: 'white'}}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            <Title>Description</Title>
                            <TextInput
                                style={{backgroundColor: 'white'}}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                            />
                            <Title>Category</Title>
                            <TextInput
                                style={{backgroundColor: 'white'}}
                                onChangeText={handleChange('category')}
                                onBlur={handleBlur('category')}
                                value={values.category}
                            />
                            <Title>Priority</Title>
                            <TextInput
                                style={{backgroundColor: 'white'}}
                                onChangeText={handleChange('priority')}
                                onBlur={handleBlur('priority')}
                                value={values.priority}
                            />
                        </ScrollView>
                        <Container style={{
                            flexDirection: 'column-reverse',
                            alignItems: 'flex-end',
                        }} backgroundColor={'rgba(54, 14, 54, 1)'}>
                            <Button style={{
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                borderRadius: 10,
                                textAlign: 'center'
                            }}>
                                <SendIcon
                                    width={50}
                                    height={50}
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