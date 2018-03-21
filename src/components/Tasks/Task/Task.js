import React from 'react';
import classes from './task.css';


const task = (props) => {
    return (
        <div className={classes.lt} >
    <span style={{textDecoration: props.done ? 'line-through' : 'none'}}>{props.taskName}</span>
    <button className={classes.button1} onClick={props.click}> Delete task </button>
    <button className={classes.button1} onClick={props.finish}>Finish task</button> 
      </div>
    )
}

export default task;