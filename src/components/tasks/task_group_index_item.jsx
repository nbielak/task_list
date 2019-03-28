import React from 'react';
import groupSVG from '../../images/Group.svg';

const taskGroupIndexItem = ({group, name, handleClick}) => {
    const numTasks = Object.keys(group).length;

    const numCompletedTasks = () => {
        let counter = 0;
        group.forEach(task => {
            if (task.completedAt){counter++;}
        })
        return counter;
    }
    return(
        <div className="index-item" onClick={handleClick}>
            <div className="svg-container">
                <img className="group" src={groupSVG}/>
            </div>
            <div className="index-item-info">
                <div className="name">
                    {name}
                </div>
                <div className="completed">
                    {numCompletedTasks()} OF {numTasks} TASKS COMPLETE
                </div>
            </div>
            
        </div>
    )
}

export default taskGroupIndexItem;