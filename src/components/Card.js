import React from 'react';

const Card = ({ name, price, tag, location, date }) => {
    return (
        <div className="card acard m-2 all-card">
            <img
                src="https://www.beyondmeat.com/wp-content/uploads/BeyondBurger_PKG_Render_734x553-1-1.png"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush acard">
                <li className="list-group-item acard">{price}</li>
                <li className="list-group-item acard">{tag}</li>
                <li className="list-group-item acard">{location}</li>
            </ul>
            <div className="card-body acard">
                <ul className="list-group list-group-flush acard">
                    <li className="list-group-item acard text-muted">{date}</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
