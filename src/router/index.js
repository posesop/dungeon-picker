import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Pages */
import WorkstationsPage from 'components/pages/WorkstationsPage';


const Router = () => (
    <Switch>
        <Route exact path="/" component={WorkstationsPage} />
    </Switch>
);

export default Router;
