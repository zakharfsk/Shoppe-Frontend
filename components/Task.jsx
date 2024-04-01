import React from 'react';
import {Button, Container, Description} from "../styles/base.styles";
import {RadioButton} from "react-native-ui-lib";
import Priority from "./Priority";
import Category from "./Category";
import moment from "moment";

const Task = ({title, time, category, priority}) => {

    const cattingText = (text) => {
        if (text.length > 20) {
            return text.slice(0, 20) + '...';
        }
        return text;
    }

    const formatTime = (time) => {
        return moment(time).calendar({
            sameDay: '[Today at] HH:mm',
            nextDay: '[Tomorrow at] HH:mm',
            nextWeek: 'dddd [at] HH:mm',
            lastDay: '[Yesterday at] HH:mm',
            lastWeek: '[Last] dddd [at] HH:mm',
            sameElse: 'DD.MM.YYYY HH:mm'
        });
    }

    return (
        <Button additionalStyles={{
            flex: 1,
            flexDirection: 'row',
            margin: '12px',
            padding: '10px',
            backgroundColor: 'rgba(54, 54, 54, 1)',
            borderRadius: '4px',
            overflow: 'hidden'
        }}>
            <Container
                additionalStyles={{gap: '20px'}}
                backgroundColor={'rgba(54, 54, 54, 1)'}>
                <Container
                    additionalStyles={{alignItems: 'flex-start'}}
                    backgroundColor={'rgba(54, 54, 54, 1)'}>
                    <Description margin={'0px'}>{cattingText(title)}</Description>
                    <Description margin={'0px'}>{formatTime(time)}</Description>
                </Container>
                <Container
                    additionalStyles={{
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                    }}
                    backgroundColor={'rgba(54, 54, 54, 1)'}>
                    <Category category={cattingText(category)}/>
                    <Container additionalStyles={{flex: 0.2}}/>
                    <Priority priority={priority}/>
                </Container>
            </Container>
        </Button>
    );
};

export default Task;