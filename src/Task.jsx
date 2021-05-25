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
    completedClicked = () => this.setState(
        {
            completed: !(this.state.completed)
        }
    );
    render()
    {
        const jsx = <div>
            <input type="checkbox" onClick={this.completedClicked}></input>
            {this.state.completed ? "<u>" : ""}
            Task
            {this.state.completed ? "</u>" : ""}
            <button>X</button>
        </div>;
        return jsx;
    }
}