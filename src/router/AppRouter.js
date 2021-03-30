import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Home} exact={true} />
            </BrowserRouter>
        );
    }
}

export default AppRouter;
