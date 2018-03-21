import React from 'react';
import classes from './task.css';


const task = (props) => {
    return (
        <div id='cd' className={classes.lt} >
    <button onClick={props.click}> Delete task </button>
    <button onClick={props.finish}> Finish task </button><br/>      
    <span style={{textDecoration: props.done ? 'line-through' : 'none'}}>{props.taskName}</span>
      </div>
    )
}

export default task;