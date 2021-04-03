import React from 'react';
import Card from './Card';

const CardList = () => {
    return (
        <div class="container">
            <div class="d-flex bricklayer justify-content-start">
                <Card
                    name={'find'}
                    price={'5.90'}
                    tag={'Vegan'}
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
