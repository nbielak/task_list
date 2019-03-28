import React from 'react';
import TaskIndexItem from './task_index_item';

const selectedGroup = ({group, name, resetSelected, allTasks, handleClick}) => {
    return (
        <div className="index-container">
            <div className="header">
                <h1>{name}</h1>
                <button className="all-groups" onClick={resetSelected}>
                    All Groups
                </button>
            </div>
            {group.map(task => {
                return (<TaskIndexItem key={task.id} handleClick={handleClick} allTasks={allTasks} task={task}/>);
            })}

        </div>
    )
}

export default selectedGroup;