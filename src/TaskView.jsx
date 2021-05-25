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
        const jsx = <tr><td>
            <input type="checkbox" onClick={this.completedClicked}></input></td>
            <td>{this.state.shouldStrikethrough ? <strike>{this.props.task.name}</strike> : this.props.task.name}</td>
            <td><button onClick={x=>this.props.onRemoveButtonClick(this.props.index)}>X</button></td>
        </tr>;
        return jsx;
    }
}