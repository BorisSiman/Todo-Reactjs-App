import React, { Component } from 'react';
import UniqueId from 'react-html-id';

import Tasks from '../components/Tasks/Tasks';
import Cockpit from '../components/cockpit/Cockpit';
import Hoc from '../hoc/Hoc';

class App extends Component {
  state = {
    task: {id:'', taskName:'', done: false},
    tasks: []
  }
 
  addTaskHandler = (event) => {
    
    let task = {...this.state.task};
    task.taskName = event.target.value;
    this.setState({task: task});
  }

  deleteTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks});
  }

  submitTaskHandler = () => {
    UniqueId.enableUniqueIds(this);
    let task = {...this.state.task};
    if (this.state.task.taskName !== '' ) {
    task.id = this.nextUniqueId();
    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({tasks: tasks});
    this.deleteInputHandler();
    }
    else {
      alert('Enter a task first!');
    }   
  }

  deleteInputHandler = () => {
    this.setState({task: {id:'', taskName:'', done: false}});
  }

  finishTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks];
    let task = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    task.done = !task.done;
    tasks.splice(taskIndex, 0, task);
    this.setState({tasks: tasks});
  }

  render() {

    let tasks = (
      <Tasks 
      singleTask={this.state.tasks}
      delete = {this.deleteTaskHandler}
      finish = {this.finishTaskHandler}
      />
    )

    let cockpit = (
      <Cockpit
      click = {this.deleteInputHandler} 
      addTask = {this.addTaskHandler}
      submitTask = {this.submitTaskHandler}
      task = {this.state.task.taskName}
      />
    )
    return (
     <Hoc>
      {cockpit}
      {tasks}
      </Hoc>
    );
  }
}

export default App;
