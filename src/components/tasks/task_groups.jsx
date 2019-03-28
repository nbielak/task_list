import React from 'react';
import TaskGroupIndexItem from './task_group_index_item';

const taskGroups = ({groups, handleClick}) => {
    return(
        <div className="index-container">
            <div className="header">
                <h1>Things To Do</h1>
            </div>
            {Object.keys(groups).map(name => {
                return (<TaskGroupIndexItem handleClick={handleClick} name={name} group={groups[name]}/>)
            })}
        </div>
    )
}

export default taskGroups;