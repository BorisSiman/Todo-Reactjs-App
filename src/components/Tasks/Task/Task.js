import React from 'react';
import classes from './task.css';


const task = (props) => {
    return (
        <div className={classes.lt} >
    <button onClick={props.click}> Delete task </button>
    <button onClick={props.done}> Finish task </button><br/>      
    {props.taskName}
      </div>
    )
}

export default task;