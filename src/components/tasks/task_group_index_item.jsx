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
        <div onClick={handleClick}>
            <div>
                <img src={groupSVG}/>
            </div>
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {numCompletedTasks()} OF {numTasks} TASKS COMPLETE
                </div>
            </div>
            
        </div>
    )
}

export default taskGroupIndexItem;