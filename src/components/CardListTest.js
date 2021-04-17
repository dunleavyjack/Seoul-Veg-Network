import React from 'react';
import CardTest from './CardTest';

const CardListTest = () => {
    return (
        <section className="breweries container" id="breweries">
            <ul>
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
                <CardTest name={'Vegan snacks'} tag={'Vegetarian'} />
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
            </ul>
        </section>
    );
};

export default CardListTest;
