import React from 'react'
export class TaskView extends React.Component
{
    render()
    {
        const jsx = <div>
            <input type="checkbox"></input>
            Task
            <button>X</button>
        </div>;
        return jsx;
    }
}