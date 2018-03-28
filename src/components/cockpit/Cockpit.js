import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) =>  (
    <div className='container mt-3 rounded text-center text-white'>
    <h1 className={classes.heading}>
    React To do
    </h1>
    <input type='text'
     placeholder="Enter your task"
     onDoubleClick={props.click}
     onChange={(event) => props.addTask(event)} 
     value={props.task}/>
    <br/>
    <button
    className='btn btn-primary m-4'
    onClick={props.submitTask}>Submit</button>
    <h1>Tasks</h1>
    </div>
    )

export default cockpit;