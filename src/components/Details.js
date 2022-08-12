import React, {useContext} from 'react';
import CurrentWeather from './CurrentWeather';
import NextWeather from './NextWeather';
import ErrorContext from '../contexts/errorContext';

const Details = () => {
    const error = useContext(ErrorContext);
    return (
        <div className= 'h-[50%] w-full overflow-y-scroll pr-4 pt-4 scroll text-lg text-cream/60'>
            {!error && (
                <div>
                    <CurrentWeather />
                    <NextWeather />
                </div>
            )}
        </div>
    );
}

export default Details;
