import React from 'react';



const task = (props) => {
let btnFinish = 'Finish';
const styling = {backgroundColor: ''};
if(props.done){
    btnFinish = 'Undo'
    styling.backgroundColor= '#3a7a82';
}    
    return (
        <div className='container border border-white rounded w-75 p-3 my-3' style={{backgroundColor: props.done ? '#3a7a82' : ''}}>
    <div className ='row'>
    <div 
        className='col-md-6 text-white lead pt-2' 
        style={{textDecoration: props.done ? 'line-through' : 'none'}}>
        {props.index}. {props.taskName}
    </div>
    <div className='col-md-6 text-right'>
    <button className='btn btn-danger m-1' onClick={props.click}> Delete task </button>
    <button className='btn border-white btn-info text-white m-1' style={styling} onClick={props.finish}>{btnFinish}</button> </div>
      </div>
      </div>
    )
}

export default task;