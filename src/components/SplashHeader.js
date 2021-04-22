import React from 'react';
import wave from '../assets/wave.png';

const SplashHeader = () => {
    return (
        <>
            <div
                className={
                    'testcover d-flex align-items-center justify-content-center'
                }
            >
                <div className={'text-center'}>
                    <h1 className={'bold gray'}>
                        Veg Network <span className="yellow">|</span> Seoul
                    </h1>
                    <h3>The best vegan and vegetarian finds in the city.</h3>
                </div>
            </div>
            <img className={'wave'} src={wave} />
        </>
    );
};

export default SplashHeader;
