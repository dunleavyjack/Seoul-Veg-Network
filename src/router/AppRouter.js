import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BrowsePage from '../pages/BrowsePage';
import Navbar from '../components/Navbar';

class AppRouter extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <BrowserRouter>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/browse" component={BrowsePage} />
                </BrowserRouter>
            </>
        );
    }
}

export default AppRouter;
