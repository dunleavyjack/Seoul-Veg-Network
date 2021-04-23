import React from 'react';
// import wave from '../assets/wave.png';
import greenWave from '../assets/greenwave.png';

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
                    <h5>The best vegan and vegetarian finds in the city.</h5>

                    <br />
                    <button type={'button'} className={'btn btn-dark m-2 gray'}>
                        Browse finds
                    </button>
                </div>
            </div>
            <img className={'wave'} src={greenWave} />
        </>
    );
};

export default SplashHeader;
