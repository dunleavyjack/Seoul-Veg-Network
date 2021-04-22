import React from 'react';
import SplashHeader from '../components/SplashHeader';
import Header from '../components/Header';
import CardListTest from '../components/CardListTest';
import Overview from '../components/Overview';

const BrowsePage = () => {
    return (
        <>
            <Header text={'The Latest'} />
            <CardListTest />
        </>
    );
};

export default BrowsePage;
