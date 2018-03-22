import React from 'react';


const task = (props) => {    
    return (
        <div className='container border border-white rounded w-75 p-3 my-3' style={{backgroundColor: props.done ? '#428bca' : ''}}>
    <div className ='row'>
    <div 
        className='col-md-6 text-white lead pt-2' 
        style={{textDecoration: props.done ? 'line-through' : 'none'}}>
        {props.index}. {props.taskName}
    </div>
    <div className='col-md-6 text-right'>
    <button className='btn btn-danger m-1' onClick={props.click}> Delete task </button>
    <button className='btn btn-primary m-1' onClick={props.finish}>Finish task</button> </div>
      </div>
      </div>
    )
}

export default task;