import logo from './logo.svg';
import './App.css';
import {TaskView} from './TaskView'
import React from 'react';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      tasks: [],
      criteria: "All"
    }
  }
  addTask = () => {this.setState({
    tasks: this.state.tasks.concat([
      {name: document.getElementById("taskTextbox").value,
      completed: false
      }]),
    criteria: this.state.criteria
  });
  document.getElementById("taskTextbox").value = "";
}
removeTask = (taskIndex) => {
  this.setState({
  tasks:this.state.tasks.filter((x,index) => index !== parseInt(taskIndex)),
  criteria: this.state.criteria
});
}
taskCompleted = (event) => {
  
}
showTasks(taskList)
{
    let children = [];
    for (const i in taskList)
    {
        let child = <tr><td><TaskView index={i} onRemoveButtonClick={this.removeTask} name={taskList[i].name}></TaskView></td></tr>;
        children.push(child);
    }
    let table = <table>
        <tbody>
            {children}
            <tr><td></td></tr>
        </tbody>
    </table>;
    return table;
  }
  render()
  {
    const jsx = 
    <div>
      {this.showTasks(this.state.tasks)}
      <input type="text" id="taskTextbox"></input><button onClick={this.addTask}>+</button>
    </div>
    // Add removal function to X buttons.
    const removeButtons = jsx
    return jsx;
  }
}

export default App;
