import React from 'react';
import tasks from '../../payload';
import TaskGroups from './task_groups';
import SelectedGroup from './selected_group';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
            groups: null,
            selected: null
        };
        this.handleGroupClick = this.handleGroupClick.bind(this);
        this.resetSelected = this.resetSelected.bind(this);
        this.handleTaskClick = this.handleTaskClick.bind(this);
    }

    componentDidMount() {
        let groups = this.groupMaker(tasks)
        this.setState({tasks, groups});
    }

    groupMaker(tasks) {
        let groups = {};
        tasks.forEach(task => {
            if (groups[task.group]) {
                groups[task.group].push(task);
            } else {
                groups[task.group] = [task];
            }
        })
        return groups;
    }

    handleGroupClick(e) {
        e.preventDefault()
        let groupName = e.currentTarget.lastElementChild.firstElementChild.innerText;
        this.setState({selected: groupName});
    }

    handleTaskClick(e, taskId) {
        e.preventDefault();
        let task = this.state.tasks.find(task => taskId === task.id)
        let now = new Date();
        let newTasks = this.state.tasks.slice();
        task.completedAt = task.completedAt ? null : now;
        newTasks.forEach(currTask => {
            let statusChange = this.dependencyChecker(currTask)
            if (currTask.id === task.id) {
                currTask = task
            } else if (!statusChange) {
                currTask.completedAt = null;
            }
        });
        this.setState({tasks: newTasks});
    }

    dependencyChecker(currTask) {
        let depIds = currTask.dependencyIds;
        return depIds.every(depId => {
            let dep = this.state.tasks.find(task => task.id === depId);
            return dep.completedAt ? true : false;
        })
    }

    resetSelected(e) {
        e.preventDefault();
        let groups = this.groupMaker(this.state.tasks);
        this.setState({selected: null, groups});
    }

    render() {
        if (!this.state.groups) {
            return null;
        }
        const content = this.state.selected ? 
            <SelectedGroup 
                handleClick={this.handleTaskClick}
                resetSelected={this.resetSelected}
                allTasks={this.state.tasks}
                name={this.state.selected} 
                group={this.state.groups[this.state.selected]} /> :
            <TaskGroups 
                handleClick={this.handleGroupClick} 
                groups={this.state.groups} />
        return (
            <div className="content">
                {content}
            </div>
        );
    }
}

export default Tasks;