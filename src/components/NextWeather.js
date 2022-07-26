import React, {useContext} from 'react';
import currentWeatherContext from '../contexts/currentWeatherContext';

const NextWeather = () => {
    const currentWeather = useContext(currentWeatherContext);

    return (
        Object.keys(currentWeather).length === 0 && (
                <div> 
                    <div className='text-cream/80 mt-8'> Next Days </div>
                    <div className='flex justify-between my-8'> 
                        <div className='flex flex-col items-start'>
                            <span> Tomorrow </span>
                            <img src="" alt="Icon" />
                        </div>
                        <div className='flex flex-col items-end gap-4'>
                            <span> max &nbsp; 67 &deg;C </span>
                            <span> min &nbsp; 43 &deg;C </span>
                        </div>
                    </div>
                    <div className='flex justify-between my-8'> 
                    <div className='flex flex-col items-start'>
                            <span> Next Date </span>
                            <img src="" alt="Icon" />
                        </div>
                        <div className='flex flex-col items-end gap-4'>
                            <span> max &nbsp; 67 &deg;C </span>
                            <span> min &nbsp; 43 &deg;C </span>
                        </div>
                    </div>
                </div>
            ) 
    );
}

export default NextWeather;
