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
    completedClicked = () =>
    {
        this.props.task.completed = !this.props.task.completed;
        this.setState(
        {
            shouldStrikethrough: this.props.task.completed
        });
    }
    render()
    {
        const jsx = <div className="task">
            <input type="checkbox" onClick={this.completedClicked}></input>
            {this.state.shouldStrikethrough ? <strike>{this.props.task.name}</strike> : this.props.task.name}
            <button onClick={x=>this.props.onRemoveButtonClick(this.props.index)}>X</button>
        </div>;
        return jsx;
    }
}