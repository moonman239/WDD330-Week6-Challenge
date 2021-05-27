import React from 'react'
export class TaskView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            shouldStrikethrough: this.props.task.completed
        };
        console.log("Initializing with task " + this.props.task.name);
        console.assert(this.state.shouldStrikethrough === this.props.task.completed);
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
        let completed = this.state.shouldStrikethrough || this.props.task.completed;
        console.log("Completed " + completed);
        const jsx = <tr className="task"><td>
            <input type="checkbox" checked={completed} onClick={this.completedClicked}></input></td>
            <td>{completed ? <strike>{this.props.task.name}</strike> : this.props.task.name}</td>
            <td><button onClick={x=>this.props.onRemoveButtonClick(this.props.index)}>X</button></td>
        </tr>;
        return jsx;
    }
}