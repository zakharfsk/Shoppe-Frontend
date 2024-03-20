import {Button, Container} from "../styles/base.styles";
import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import NoTask from "../components/NoTask";
import Task from "../components/Task";
import {ActivityIndicator, Alert, FlatList, RefreshControl, VirtualizedList} from "react-native";
import SearchBar from "../components/SearchBar";
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
            <Container>
                <ActivityIndicator size="large" color="white"/>
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
                <SearchBar/>
                <VirtualizedList
                    style={{flex: 1}}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchTasks} tintColor={'white'}/>}
                    initialNumToRender={1}
                    windowSize={1}
                    maxToRenderPerBatch={1}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Button
                            additionalStyles={{
                                margin: '12px',
                                padding: '12px',
                                backgroundColor: 'rgba(54, 54, 54, 1)',
                            }}>
                            <Task
                                key={item.id}
                                title={item.title}
                                time={item.title}
                                category={item.category}
                                priority={item.priority}
                            />
                        </Button>
                    )}
                    getItemCount={() => (taskList.length)}
                    getItem={() => (taskList)}
                >
                </VirtualizedList>
            </Container>
        )
    }
};

export default HomeScreen;