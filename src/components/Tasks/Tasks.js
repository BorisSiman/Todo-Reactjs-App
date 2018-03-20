import React from 'react';
import Task from './Task/Task';

const tasks = (props) => props.singleTask.map((task, index) => {
    return (
        <Task 
        click = {() => props.delete(index)}
        taskName = {task.taskName}
        done = {props.done}
        key = {task.id}/>
        )
    }) 

export default tasks;