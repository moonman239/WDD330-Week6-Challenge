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
      completed: false,
      criteria: this.state.criteria
      });
    this.setState({
    tasks:tasks,
    criteria:this.state.criteria
  });

  document.getElementById("taskTextbox").value = "";
}
removeTask = (taskIndex) => {
  tasks = tasks.filter((x,index) => index !== parseInt(taskIndex));
  this.setState({
  tasks:tasks,
  criteria:this.state.criteria
});
}
showOnlyCompleted = () => {
  this.setState({
  tasks:tasks.filter(task => task.completed)
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
      <h1>Todos</h1>
      {this.showTasks(this.state.tasks)}
      <input type="text" id="taskTextbox"></input><button onClick={this.addTask}>+</button>
      <button onClick={this.showOnlyCompleted}>Completed</button>
    </div>
    return jsx;
  }
}

export default App;
