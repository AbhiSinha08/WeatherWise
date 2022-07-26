import React, {useContext} from 'react';
import currentWeatherContext from '../contexts/currentWeatherContext';

const CurrentWeather = () => {
    const currentWeather = useContext(currentWeatherContext);

    return (
            Object.keys(currentWeather).length === 0 && (
                <div> 
                    <div className='text-cream/80 mt-4'> Weather Details </div>
                    <div className='flex justify-between my-8'> 
                        <span> Cloudy </span> <span> 86% </span>
                    </div>
                    <div className='flex justify-between my-8'> 
                        <span> Humidity </span> <span> 63% </span>
                    </div>
                    <div className='flex justify-between my-8'> 
                        <span> Wind </span> <span> 8 km/h </span>
                    </div>
                    <hr className='text-cream/20' />
                </div>
            )        
    );
}

export default CurrentWeather;
