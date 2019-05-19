import React from 'react';
import  { Route,Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/register" component={Register} />
                <Route  path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

