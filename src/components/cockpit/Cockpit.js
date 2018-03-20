import React from 'react';
import classes from './Cockpit.css';

import Hoc from '../../hoc/Hoc';

const cockpit = (props) => {
    return (
    <Hoc>
    <h1>React To do</h1>
    <label>Enter your task:</label><br/>
    <input type='text' onDoubleClick={props.click} onChange={(event) => props.addTask(event)} value={props.task}/>
    <br/>
    <button className={classes.sbutton} onClick={props.submitTask}>Submit</button>
      </Hoc>
    )}

export default cockpit;