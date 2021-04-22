import React from 'react';

const Header = ({ text }) => {
    return (
        <div class="container mb-3 mt-5 text-center">
            <h1>
                <span class="squiggle">{text}</span>
            </h1>
        </div>
    );
};

export default Header;
