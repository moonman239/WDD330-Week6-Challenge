import logo from './logo.svg';
import './App.css';
import {TaskView,showTasks} from './Task'
import React from 'react';

class App extends React.Component
{

  render()
  {
    const jsx = 
    <div>
      {showTasks(["hi"])}
      <input type="text"></input><button>+</button>
    </div>
    return jsx;
  }
}

export default App;
