import logo from './logo.svg';
import './App.css';
import {TaskView} from './TaskView'
import React from 'react';
var tasks = [];
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
  addTask = () => {
    tasks.push(
      {name: document.getElementById("taskTextbox").value,
      completed: false
      });
    this.setState({
    tasks:tasks,
    criteria: this.state.criteria
  });
  document.getElementById("taskTextbox").value = "";
}
removeTask = (taskIndex) => {
  tasks = tasks.filter((x,index) => index !== parseInt(taskIndex));
  this.setState({
  tasks:tasks,
  criteria: this.state.criteria
});
}
showTasks(taskList)
{
    let children = [];
    for (const i in taskList)
    {
        let child = <tr><td><TaskView index={i} onRemoveButtonClick={this.removeTask} task={taskList[i]}></TaskView></td></tr>;
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
