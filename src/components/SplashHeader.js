import React from 'react';
import wave from '../assets/wave.png';

const SplashHeader = () => {
    return (
        <>
            <div className={'testcover'}>
                <h1 className={'text-center'}>Vegan Finds From Your City</h1>
            </div>
            <img className={'wave'} src={wave} />
        </>
    );
};

export default SplashHeader;
