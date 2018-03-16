import React, { Component } from 'react';
import UniqueId from 'react-html-id';

import Task from './components/Task';
import Cockpit from './components/Cockpit';

class App extends Component {
  state = {
    task: {id:'', taskName:''},
    tasks: []
  }
 
  addTaskHandler = (event) => {
    
    let task = {id: 'test', taskName: event.target.value};
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
    }
    else {
      alert('Enter a task first!');
    }   
  }

  deleteInputHandler = () => {
    this.setState({task: {id:'', taskName:''}});
  }

  render() {
    let tasks = (
      <Task 
      singleTask={this.state.tasks}
      delete = {this.deleteTaskHandler}
      />
    )
    return (
      <div>
      <Cockpit
      click = {this.deleteInputHandler} 
      addTask = {this.addTaskHandler}
      submitTask = {this.submitTaskHandler}
      task = {this.state.task.taskName}
      />
      {tasks}
      </div>
    );
  }
}

export default App;
