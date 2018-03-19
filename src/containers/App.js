import React, { Component } from 'react';
import UniqueId from 'react-html-id';
import classes from './App.css';

import Tasks from '../components/Tasks/Tasks';
import Cockpit from '../components/cockpit/Cockpit';

class App extends Component {
  state = {
    task: {id:'', taskName:''},
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

  finishTaskHandler = (taskIndex) => {
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
      <Tasks 
      singleTask={this.state.tasks}
      delete = {this.deleteTaskHandler}
      done = {this.finishTaskHandler}
      style = {this.finishTaskHandler}
      />
    )
    return (
      <div className={classes.app}>
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
