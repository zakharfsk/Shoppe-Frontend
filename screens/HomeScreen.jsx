import {Container, Description} from "../styles/base.styles";
import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import NoTask from "../components/NoTask";
import Task from "../components/Task";
import SearchIcon from "../assets/search_icon.svg";
import {ActivityIndicator, Alert, FlatList, RefreshControl} from "react-native";
import {SearchBar} from '@rneui/themed';
import axios from "axios";

const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [taskList, setTaskList] = useState([]);
    const [search, setSearch] = useState("");

    const fetchTasks = async () => {
        setIsLoading(true);
        await axios
            .get('https://65faf66f14650eb21008e799.mockapi.io/tasks')
            .then(({data}) => {
                setTaskList(data);
            })
            .catch((err) => {
                Alert.alert('Ошибка', 'Не удалось получить статьи');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {(async () => await fetchTasks())()}, [])

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
                    searchIcon={<SearchIcon/>}
                    containerStyle={{
                        margin: 12,
                        padding: 0,
                        borderColor: 'rgba(18, 18, 18, 1)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        backgroundColor: 'rgba(18, 18, 18, 1)',
                    }}
                    inputContainerStyle={{
                        padding: 0,
                        margin: 0,
                        borderRadius: 4,
                        backgroundColor: 'rgba(29, 29, 29, 1)',
                        borderColor: 'rgba(151, 151, 151, 1)'
                    }}
                    inputStyle={{
                        color: 'rgba(175, 175, 175, 1)'
                    }}
                    onChangeText={(text) => setSearch(text)}
                    value={search}
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
                            time={item.createdAt}
                            category={item.category}
                            priority={item.priority}
                        />
                    )}
                >
                </FlatList>
            </Container>
        )
    }
};

export default HomeScreen;