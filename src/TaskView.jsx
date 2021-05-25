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
            <button>X</button>
        </div>;
        return jsx;
    }
}

export function showTasks(taskList)
{
    let children = [];
    for (const i in taskList)
    {
        let child = <tr><td><TaskView index={i} name={taskList[i]}></TaskView></td></tr>;
        children.push(child);
    }
    let table = <table>
        <tbody>
            {children}
        </tbody>
    </table>;
    return table;
}