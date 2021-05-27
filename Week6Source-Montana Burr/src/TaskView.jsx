import React from 'react'
export class TaskView extends React.Component
{
    constructor(props)
    {
        super(props);
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
        if (this.props.task.completed)
        {
        this.setState({
            shouldStrikethrough: true
        });
    };
        console.assert(!(this.props.task.completed === true && this.state.shouldStrikethrough === false));
        const jsx = <tr className="task"><td>
            <input type="checkbox" onClick={this.completedClicked}></input></td>
            <td>{this.state.shouldStrikethrough ? <strike>{this.props.task.name}</strike> : this.props.task.name}</td>
            <td><button onClick={x=>this.props.onRemoveButtonClick(this.props.index)}>X</button></td>
        </tr>;
        return jsx;
    }
}