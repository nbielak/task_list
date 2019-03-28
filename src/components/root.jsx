import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Tasks from './tasks/tasks';

const Root = () => (
    <div>
        <Switch>
            <Route path="/" component={Tasks}/>
        </Switch>
    </div>
)

export default Root;