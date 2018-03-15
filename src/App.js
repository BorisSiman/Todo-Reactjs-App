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
    UniqueId.enableUniqueIds(this);
    let task = {id: this.nextUniqueId() , taskName: event.target.value};
    this.setState({task: task});
  }

  deleteTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks});
  }

  submitTaskHandler = () => {
    let task = this.state.task;
    if (this.state.task.taskName !== '' ) {
    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({tasks: tasks});
    }
    else {
      alert('Enter a task first!');
    }
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
