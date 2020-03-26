import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarvelData from './MarvelData';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MarvelData} />
        </Switch>
    </BrowserRouter>
);

export default Routes;