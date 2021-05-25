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
            {this.state.completed ? <strike>{this.props.name}</strike> : this.props.name}
            <button onClick={this.props.onRemoveButtonClick}>X</button>
        </div>;
        return jsx;
    }
}