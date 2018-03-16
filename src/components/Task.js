import React from 'react';

const task = (props) => {
   return props.singleTask.map((task, index) => {
    return (
        <div key={task.id}>
        {task.taskName}
        <button onClick={()=> props.delete(index)}> Delete task </button>
        </div>
        )
    })
}

export default task;