import React from 'react';
import {Button, Description} from "../styles/base.styles";

const Task = ({title, time, category, priority}) => {
    return (
        <Button additionalStyles={{
            margin: '12px',
            padding: '12px',
            backgroundColor: 'rgba(54, 54, 54, 1)',
            borderRadius: '4px'
        }}>
            <Description margin={"0px"}>
                {title} {time} {category} {priority}
            </Description>
        </Button>
    );
};

export default Task;