import React, {useContext} from 'react';
import CurrentWeatherContext from '../contexts/CurrentWeatherContext';
import UnitContext from '../contexts/UnitContext';

const NextWeather = () => {
    const currentWeather = useContext(CurrentWeatherContext);
    const {unitC} = useContext(UnitContext);

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
                        <span> min &nbsp; {unitC ? minC2 : minF2} &deg;{unitC ? 'C' : 'F'} </span>
                        <span> max &nbsp; {unitC ? maxC2 : maxF2} &deg;{unitC ? 'C' : 'F'} </span>
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
                        <span> max &nbsp; {unitC ? maxC3 : maxF3} &deg;{unitC ? 'C' : 'F'} </span>
                        <span> min &nbsp; {unitC ? minC3 : minF3} &deg;{unitC ? 'C' : 'F'} </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextWeather;
