import React from 'react';

const CardTest = ({ name, tag }) => {
    return (
        <>
            <li>
                <figure>
                    <img
                        src="https://www.beyondmeat.com/wp-content/uploads/BeyondBurger_PKG_Render_734x553-1-1.png"
                        alt="Vegetarian find"
                    />
                    <figcaption>
                        <h3>{name}</h3>
                    </figcaption>
                </figure>
                <p>Emart 24 in Seongsu</p>
                <p className="detail">Vegan burgers I found.</p>
                <p className="location">Yongsan / Itaewon</p>
                <h3 className="m-3">{tag}</h3>
            </li>
        </>
    );
};

export default CardTest;
