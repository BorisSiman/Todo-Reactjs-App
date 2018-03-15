import React from 'react';

import Hoc from '../hoc/Hoc';

const cockpit = (props) => {
    return (
    <Hoc>
    <label>Enter your task:</label><input type='text' onChange={(event) => props.addTask(event)} value={props.task}/>
    <button onClick={props.submitTask}>Submit</button>
      </Hoc>
    )}

export default cockpit;