import React, {useContext} from 'react';
import CurrentCityContext from '../contexts/CurrentCityContext';
import CurrentWeatherContext from '../contexts/CurrentWeatherContext';
import UnitContext from '../contexts/UnitContext';

const Widget = () => {
    const {currentCity} = useContext(CurrentCityContext);
    const currentWeather = useContext(CurrentWeatherContext);
    const {unitC} = useContext(UnitContext);

    if (Object.keys(currentWeather).length !== 0) {
        const {
            current: {
                condition: {
                    icon,
                    text: condition
                },
                last_updated_epoch: updateTime,
                temp_c: tempC,
                temp_f: tempF
            },
            location: {
                name: cityName,
                localtime: time
            }
        } = currentWeather;

        const localTime = new Date(time);

        return (
            <div className='flex-grow flex flex-col justify-between pb-24 text-shadow'>
                <div className='text-5xl'> {condition} </div>
                <div className='flex justify-start items-end'>
                    <span className='text-9xl'> {unitC ? tempC : tempF}&deg; </span>
                    <div className='flex flex-col gap-2 pb-1 items-center'>
                        <span className='text-6xl'> {cityName} </span>
                        <span className='text-lg'>
                            {
                                `${localTime.toLocaleTimeString(
                                    'en-GB',
                                    {hour: '2-digit', minute: '2-digit'}
                                )} - ${localTime.toLocaleDateString(
                                    'en-GB',
                                    {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
                                )}`
                            }
                        </span>
                    </div>
                    <div className='h-full flex items-center'>
                        <img src={icon} alt="Icon" className='ml-5 h-20' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Widget;
