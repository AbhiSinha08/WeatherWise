import React, {useContext} from 'react';
import CurrentWeatherContext from '../contexts/currentWeatherContext';

const CurrentWeather = () => {
    const currentWeather = useContext(CurrentWeatherContext);

    if (Object.keys(currentWeather).length !== 0) {
        const {
            current:{
                humidity,
                wind_kph: wind,
                cloud
            }
        } = currentWeather;

        return (
            <div> 
                <div className='text-cream/80 mt-4'> Weather Details </div>
                <div className='flex justify-between my-8'> 
                    <span> Cloudy </span> <span> {cloud}% </span>
                </div>
                <div className='flex justify-between my-8'> 
                    <span> Humidity </span> <span> {humidity}% </span>
                </div>
                <div className='flex justify-between my-8'> 
                    <span> Wind </span> <span> {wind} km/h </span>
                </div>
                <hr className='text-cream/20' />
            </div>    
        );
    }
}

export default CurrentWeather;
