import React from 'react';
import TaskIndexItem from './task_index_item';

const selectedGroup = ({group, name, resetSelected, allTasks, handleClick}) => {
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <button onClick={resetSelected}>
                    All Groups
                </button>
            </div>
            <div>
                {group.map(task => {
                    return (<TaskIndexItem key={task.id} handleClick={handleClick} allTasks={allTasks} task={task}/>);
                })}
            </div>
        </div>
    )
}

export default selectedGroup;