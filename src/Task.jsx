import React from 'react'
export class TaskView extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            completed: false
        };
    }
    // When a task is completed, add a strikethrough.
    completedClicked = () => this.setState(
        {
            completed: !(this.state.completed)
        }
    );
    render()
    {
        const jsx = <div>
            <input type="checkbox" onClick={this.completedClicked}></input>
            {this.state.completed ? <strike>Task</strike> : "Task"}
            <button>X</button>
        </div>;
        return jsx;
    }
}
export class TaskListView extends React.Component
{
    render()
    {
        
    }
}