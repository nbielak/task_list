import React from 'react';
import completed from '../../images/Completed.svg';
import incomplete from '../../images/Incomplete.svg';
import locked from '../../images/Locked.svg';

const taskIndexItem = ({allTasks, task, handleClick}) => {
    const lockedStatus = () => {
        let unlocked = task.dependencyIds.every(depId => {
            let dep = allTasks.find(task => task.id === depId);
            return dep.completedAt ? true : false;
        });
        if (!unlocked) {
            return(<img className="locked" src={locked}/>);
        }
        return task.completedAt ? (<img className="completed" src={completed} />) : (<img className="incomplete"src={incomplete} />);
    }

    const statusChange = (e) => {
        let status = e.currentTarget.lastElementChild.firstElementChild.className;
        if (status === "locked") {return;}
        handleClick(e, task.id)
    }
    return(
        <div onClick={statusChange}>
            <div>
                {task.task}
            </div>
            <div>
                {lockedStatus()}
            </div>
        </div>
    );
}

export default taskIndexItem;