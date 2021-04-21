import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand nav-title brand-text" href="/">
                    Veg Network <span className="yellow">|</span> Seoul{' '}
                    <span className="text-info">
                        {'{'}BETA{'}'}
                    </span>
                </a>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="navbar-collapse collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link" href="/addfinds">
                            Add A Find
                        </a>
                        <a className="nav-link" href="#">
                            About
                        </a>
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                        <button
                            type="button"
                            className="btn btn-warning"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
