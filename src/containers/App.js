import React, { Component } from 'react';
import UniqueId from 'react-html-id';

import Tasks from '../components/Tasks/Tasks';
import Cockpit from '../components/cockpit/Cockpit';
import Hoc from '../hoc/Hoc';

class App extends Component {
  state = {
    task: {id:'', taskName:'', done: false},
    tasks: [],
    placeholder: { name:'Enter your task', nameColor:{border:'', borderRadius:''}}
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
      this.setState({placeholder: {name:'Enter a task first!', nameColor:{border:'5px solid #d9534f', borderRadius:'10px'}}})
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
  onFocusHandler = () => {
    this.setState({placeholder: {name: '', nameColor:{border:'', borderRadius:''}}});
  }
  onBlurHandler = () => {
    if(this.state.placeholder.name === ''){
    this.setState({placeholder: {name:'Enter your task'}})
    }
  }
  onKeyPressHandler = (event) => {
    if((event.charCode || event.keyCode) === 13){
      this.submitTaskHandler();
      console.log('test')
    }
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
      onFocus = {this.onFocusHandler}
      onBlur = {this.onBlurHandler}
      placeholder = {this.state.placeholder}
      onKeyPress = {this.onKeyPressHandler}
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
