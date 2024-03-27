import React from 'react';
import {Button, Container, Description} from "../styles/base.styles";
import {RadioButton} from "react-native-ui-lib";
import Priority from "./Priority";
import Category from "./Category";

const Task = ({title, time, category, priority}) => {

    const cattingTitle = (title) => {
        if (title.length > 30) {
            return title.slice(0, 20) + '...';
        }
        return title;
    }

    const formatTime = (time) => {
        const date = new Date(time);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

    return (
        <Button additionalStyles={{
            flex: 1,
            flexDirection: 'row',
            margin: '12px',
            padding: '15px',
            // backgroundColor: 'rgba(54, 54, 54, 1)' ,
            backgroundColor: 'rgb(200, 135, 231)',
            borderRadius: '4px',
            overflow: 'hidden'
        }}>
            <Container style={{flexDirection: 'row'}}>
                <Container style={{
                    flex: 2,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '6px'
                }} backgroundColor={'rgb(134, 135, 231)'}>
                    <Description margin={'0px'}>{cattingTitle(title)}</Description>
                    <Description margin={'0px'}>{formatTime(time)}</Description>
                </Container>
                <Container style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '12px',
                }}>
                    <Category category={category}/>
                    <Priority priority={priority}/>
                </Container>
            </Container>
        </Button>
    );
};

export default Task;