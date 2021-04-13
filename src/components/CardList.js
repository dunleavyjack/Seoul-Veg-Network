import React from 'react';
import Card from './Card';

const CardList = () => {
    const name = 'name';
    const price = 'price';
    const tag = 'vegetarian';
    const location = 'location';
    const date = 'today';

    return (
        <div class="container">
            <div>
                <Card
                    name={'find'}
                    price={'5.90'}
                    tag={'Vegetarian'}
                    location={'Emart24'}
                    date={'12/3/21'}
                />
                <Card
                    name={'find'}
                    price={'5.90'}
                    tag={'Vegetarian'}
                    location={'Emart24'}
                    date={'12/3/21'}
                />
                <Card
                    name={'find'}
                    price={'5.90'}
                    tag={'Vegetarian'}
                    location={'Emart24'}
                    date={'12/3/21'}
                />
                <Card
                    name={'find'}
                    price={'5.90'}
                    tag={'Vegetarian'}
                    location={'Emart24'}
                    date={'12/3/21'}
                />
            </div>
        </div>
    );
};

export default CardList;
