import React from 'react';
import CurrentWeather from './CurrentWeather';
import NextWeather from './NextWeather';

const Details = () => {
    return (
        <div className= 'h-[50%] w-full overflow-y-scroll pr-4 pt-4 scroll text-lg text-cream/60'>
            <CurrentWeather />
            <NextWeather />
        </div>
    );
}

export default Details;
