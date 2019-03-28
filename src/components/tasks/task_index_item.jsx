import React from 'react';
import completed from '../../images/Completed.svg';
import incomplete from '../../images/Incomplete.svg';
import locked from '../../images/Locked.svg';
import classNames from 'classnames';

const taskIndexItem = ({allTasks, task, handleClick}) => {
    
    const lockedStatus = () => {
        let unlocked = task.dependencyIds.every(depId => {
            let dep = allTasks.find(task => task.id === depId);
            return dep.completedAt ? true : false;
        });
        let stat = null;
        if (!unlocked) {
            stat = "locked"
        } else {
            stat = task.completedAt ? "completed" : "incomplete"
        }
        return stat;
    }

    let status = lockedStatus();
    
    const statusChange = (e) => {
        if (status === "locked") {return;}
        handleClick(e, task.id)
    }

    const svgBuilder = () => {
        if (status === "locked") {
            return (<img className="locked" src={locked} />);
        } else if (status === "completed") {
            return (<img className="unlocked" src={completed} />);
        } else {
            return (<img className="unlocked" src={incomplete} />);
        }
    }

    const nameBuilder = () => {
        let style = "name";
        if (status === "locked") {
            style = "locked-name"
        } else if (status === "completed") {
            style = "complete-name"
        }
        return (<span className={style}>{task.task}</span>);
    }

    let indexItemClasses = classNames({
        "index-item": true,
        "no-hover": status === "locked"
    })

    return(
        <div className={indexItemClasses} onClick={statusChange}>
            <div className="svg-container">
                {svgBuilder()}
            </div>
            <div className="index-item-info">
                {nameBuilder()}
            </div>
        </div>
    );
}

export default taskIndexItem;