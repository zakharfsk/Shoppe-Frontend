import React from 'react';
import NoTaskPhoto from "../assets/checklist_rafiki.svg";
import {Description, Title} from "../styles/base.styles";
import {View} from "react-native";

const NoTask = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <NoTaskPhoto/>
            <Title
                additionalStyles={{marginTop: '0px', marginBottom: '0px'}}>
                What do you want to do today?
            </Title>
            <Description>Tap + to add your tasks</Description>
        </View>
    );
};

export default NoTask;