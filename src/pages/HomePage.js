import React from 'react';
import SplashHeader from '../components/SplashHeader';
import Header from '../components/Header';
import CardListTest from '../components/CardListTest';

const BrowsePage = () => {
    return (
        <>
            <SplashHeader />
            <Header text={'The Latest'} />
            <CardListTest />
        </>
    );
};

export default BrowsePage;
