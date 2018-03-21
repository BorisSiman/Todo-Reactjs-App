import React from 'react';
import Task from './Task/Task';
import Done from './Task/Done';
import Hoc from '../../hoc/Hoc';

const tasks = (props) => props.singleTask.map((task, index) => {
    return (
        <Task 
        click = {() => props.delete(index)}
        taskName = {task.taskName}
        done = {task.done}
        key = {task.id}
        finish = {() => props.finish(index)}
        />
        )
    }) 

export default tasks;