import React from 'react';
import CardTest from './CardTest';

const CardListTest = () => {
    return (
        <section className="breweries container" id="breweries">
            <ul>
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
            </ul>
        </section>
    );
};

export default CardListTest;
