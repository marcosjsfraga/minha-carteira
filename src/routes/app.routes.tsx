import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/list/:type" component={List} />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
};

export default AppRoutes;
