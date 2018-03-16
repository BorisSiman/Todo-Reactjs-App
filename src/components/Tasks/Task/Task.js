import React from 'react';
import classes from './task.css';

const task = (props) => {
    return (
        <div className={classes.task}>
    {props.taskName}
    <button onClick={props.click}> Delete task </button>
    <button onClick={props.finished}> Finish task </button>        
      </div>
    )
}

export default task;