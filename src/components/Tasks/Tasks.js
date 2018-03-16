import React from 'react';
import Task from './Task/Task';

const tasks = (props) => props.singleTask.map((task, index) => {
    return (
        <Task 
        click = {() => props.delete(index)}
        finished = {() => props.done(index)}
        taskName = {task.taskName}
        key = {task.id}/>
        )
    }) 

export default tasks;