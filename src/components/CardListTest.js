import React from 'react';
import CardTest from './CardTest';

const CardListTest = () => {
    return (
        <section className="finds container" id="finds">
            <ul>
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
                <CardTest name={'Vegan snacks'} tag={'Vegetarian'} />
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
                <CardTest name={'Beyond Burger'} tag={'Vegan'} />
                <CardTest name={'Not meat'} tag={'Vegan'} />
            </ul>
        </section>
    );
};

export default CardListTest;
