import React from 'react';
import pic from '../assets/veggie.jpeg';

const CardTest = ({ name, tag }) => {
    return (
        <>
            <li className="find-body">
                <figure>
                    <img
                        // src="https://www.beyondmeat.com/wp-content/uploads/BeyondBurger_PKG_Render_734x553-1-1.png"
                        src={pic}
                        alt="Vegetarian find"
                        className={'image-border'}
                    />
                </figure>
                <h2>{name}</h2>
                {/* <h3 className="m-3">{tag}</h3> */}
                <h5 className={'find-tag'}>{tag}</h5>
                <p className="find-detail">
                    Vegan burgers I found at Emart in Seongsu. They were really
                    good!
                </p>
                <p className="find-price">3000₩</p>
                <p className="find-location">Yongsan / Itaewon</p>
                {/* <h3 className="m-3">{tag}</h3> */}
            </li>
        </>
    );
};

export default CardTest;
