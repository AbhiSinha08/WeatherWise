import React, {useContext} from 'react';
import UnitToggle from './UnitToggle';
import Widget from './Widget';
import Error from './Error';
import ErrorContext from '../contexts/ErrorContext';

const Dashboard = () => {
    const error = useContext(ErrorContext);

    return (
        <div className='h-full w-full pl-16 pt-12 pb-2 pr-4 bg-slate-900/40 text-white flex flex-col justify-between'>
            <div className='flex justify-between text-shadow-sm'>
                Weather App
                <UnitToggle />
            </div>
            {error ? <Error message={error} /> : <Widget />}
            <div className='flex justify-between mr-8 text-sm text-shadow-sm opacity-50'>
                <span> Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a> </span>
                <span> Design inspired from <a href="https://dribbble.com/shots/7118235-Weather-DailyUI-037?utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20%20-%20DailyUI%20037&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20%20-%20DailyUI%20037&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20%20-%20DailyUI%20037&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20%20-%20DailyUI%20037&utm_medium=Social_Share"
                    title="Weather - DailyUI - Dribble">Dribble</a> </span>
            </div>
        </div>
    );
}

export default Dashboard;
