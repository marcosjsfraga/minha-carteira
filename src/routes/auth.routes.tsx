import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={SignIn} />
        </Switch>
    );
};

export default AuthRoutes;
