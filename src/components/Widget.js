import React, {useContext} from 'react';
import currentCityContext from '../contexts/currentCityContext';
import currentWeatherContext from '../contexts/currentWeatherContext';

const Widget = () => {
    const {currentCity} = useContext(currentCityContext);
    const currentWeather = useContext(currentWeatherContext);

    return (
        Object.keys(currentWeather).length === 0 && (
            <div className='flex-grow flex flex-col justify-between pb-24'>
                <div className='text-4xl'> Patchy light rain with thunder </div>
                <div className='flex justify-start items-end'>
                    <span className='text-9xl'> 16&deg; </span>
                    <div className='flex flex-col gap-2 pb-1 items-center'>
                        <span className='text-6xl'> {currentCity} </span>
                        <span className='text-lg'> 06:09 - Monday, 9 Sep '19 </span>
                    </div>
                    <img src="" alt="Icon" className='ml-5 pb-2' />
                </div>
            </div>
        )
    );
}

export default Widget;
