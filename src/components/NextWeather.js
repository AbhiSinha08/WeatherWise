import React, {useContext} from 'react';
import currentWeatherContext from '../contexts/currentWeatherContext';

const NextWeather = () => {
    const currentWeather = useContext(currentWeatherContext);

    if (Object.keys(currentWeather).length !== 0) {
        const {
            forecast:{
                forecastday: [
                    _,
                    {
                        date: date2,
                        day: {
                            maxtemp_c: maxC2, 
                            maxtemp_f: maxF2, 
                            mintemp_c: minC2, 
                            mintemp_f: minF2,
                            condition: {icon: icon2}
                        }
                    },
                    {
                        date: date3,
                        day: {
                            maxtemp_c: maxC3, 
                            maxtemp_f: maxF3, 
                            mintemp_c: minC3, 
                            mintemp_f: minF3,
                            condition: {icon: icon3}
                        }
                    }
                ]
            }
        } = currentWeather;

        const day3 = new Date(date3);
        
        return (
            <div> 
                <div className='text-cream/80 mt-8'> Next Days </div>
                <div className='flex justify-between my-8'> 
                    <div className='flex flex-col items-start'>
                        <span> Tomorrow </span>
                        <img src={icon2} alt="Icon" className='h-12' />
                    </div>
                    <div className='flex flex-col items-end gap-4'>
                        <span> max &nbsp; {maxC2} &deg;C </span>
                        <span> min &nbsp; {minC2} &deg;C </span>
                    </div>
                </div>
                <div className='flex justify-between my-8'> 
                <div className='flex flex-col items-start'>
                        <span>
                            {day3.toLocaleDateString('en-GB', {month: 'long', day: 'numeric'})}
                        </span>
                        <img src={icon3} alt="Icon" className='h-12' />
                    </div>
                    <div className='flex flex-col items-end gap-4'>
                        <span> max &nbsp; {maxC3} &deg;C </span>
                        <span> min &nbsp; {minC3} &deg;C </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextWeather;
