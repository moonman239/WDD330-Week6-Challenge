import logo from './logo.svg';
import './App.css';
import {TaskView,showTasks} from './Task'
import React from 'react';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      tasks: []
    }
  }
  addTask = () => this.setState({
    tasks: this.state.tasks.concat([document.getElementById("taskTextbox").value])
  })
  render()
  {
    const jsx = 
    <div>
      {showTasks(this.state.tasks)}
      <input type="text" id="taskTextbox"></input><button onClick={this.addTask}>+</button>
    </div>
    return jsx;
  }
}

export default App;
