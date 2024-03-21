import {Button, Container, Description} from "../styles/base.styles";
import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import NoTask from "../components/NoTask";
import Task from "../components/Task";
import {ActivityIndicator, Alert, FlatList, RefreshControl, VirtualizedList} from "react-native";
// import SearchBar from "../components/SearchBar";
import { SearchBar } from '@rneui/themed';
import axios from "axios";

const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [taskList, setTaskList] = useState([]);

    const fetchTasks = () => {
        setIsLoading(true);
        axios
            .get('https://65faf66f14650eb21008e799.mockapi.io/tasks')
            .then(({data}) => {
                setTaskList(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Ошибка', 'Не удалось получить статьи');
            })
            .finally(() => {
                setIsLoading(false);
            });
        console.log(taskList)
    }

    useEffect(fetchTasks, [])

    if (isLoading) {
        return (
            <Container style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(54, 54, 54, 1)',
            }}>
                <ActivityIndicator size="large" color="white"/>
                <Description>Loading...</Description>
            </Container>
        )
    }

    if (taskList.length === 0) {
        return (
            <Container>
                <Header text={"Home"}/>
                <NoTask/>
            </Container>
        )
    }

    if (taskList.length > 0) {
        return (
            <Container>
                <Header text={"Home"}/>
                <SearchBar
                    containerStyle={{
                        borderRadius: 4,
                        margin: 12,
                        borderColor: 'rgba(151, 151, 151, 1)',
                        backgroundColor: 'rgba(29, 29, 29, 1)',
                }}
                    inputContainerStyle={{
                        backgroundColor: 'rgba(29, 29, 29, 1)',
                        padding: 0,
                        margin: 0,
                        borderColor: 'rgba(151, 151, 151, 1)'
                }}
                    placeholder="Search for your task..."

                />
                <FlatList
                    style={{flex: 1}}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchTasks} tintColor={'white'}/>}
                    initialNumToRender={taskList.length}
                    updateCellsBatchingPeriod={100}
                    maxToRenderPerBatch={10}
                    keyExtractor={(item) => item.id}
                    data={taskList}
                    renderItem={({item}) => (
                        <Task
                            title={item.title}
                            time={item.title}
                            category={item.category}
                            priority={item.priority}
                        />
                    )
                    }
                >
                </FlatList>
            </Container>
        )
    }
};

export default HomeScreen;