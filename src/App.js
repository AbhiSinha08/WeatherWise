import React, {useState, useEffect, useRef} from 'react';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Search from './components/Search';
import currentCityContext from './contexts/currentCityContext';
import currentWeatherContext from './contexts/currentWeatherContext';
import getWeather from './utils/weatherAPI';

function App() {
    const [currentCity, setCurrentCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState({});
    const isInitialMount = useRef(true);

    useEffect(() => {
        let data = localStorage.getItem("lastCitySearched");
        if (data)
            setCurrentCity(data);
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            async function handleCurrentCityChange() {
                localStorage.setItem("lastCitySearched", currentCity);
                const weatherDetails = await getWeather(currentCity);
                if (weatherDetails)
                    setCurrentWeather(weatherDetails);
            }
            handleCurrentCityChange();
        }
    }, [currentCity]);

    useEffect(() => {
        console.log("Current weather details changed");
        console.log(currentWeather);
    }, [currentWeather])

    return (
        <currentCityContext.Provider value={{currentCity, setCurrentCity}}>
            <currentWeatherContext.Provider value={currentWeather}>
                <div className="flex w-screen h-screen selection:bg-blue-400/20">
                    <div className="body h-full w-[65%]">
                        <Dashboard />
                    </div>
                    <div className="blur-bg h-full w-[35%] flex flex-col pl-16 pr-12">
                        <Search />
                        <Details />
                    </div>
                </div>
            </currentWeatherContext.Provider>
        </currentCityContext.Provider>
    );
}

export default App;
