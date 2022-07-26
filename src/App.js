import React, {useState, useEffect, useRef} from 'react';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Search from './components/Search';
import CurrentCityContext from './contexts/CurrentCityContext';
import CurrentWeatherContext from './contexts/CurrentWeatherContext';
import UnitContext from './contexts/UnitContext';
import getWeather from './utils/weatherAPI';

function App() {
    const [currentCity, setCurrentCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState({});
    const [unitC, setUnitC] = useState(true);
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

    return (
        <CurrentCityContext.Provider value={{currentCity, setCurrentCity}}>
            <CurrentWeatherContext.Provider value={currentWeather}>
                <UnitContext.Provider value={{unitC, setUnitC}}>    
                    <div className="flex w-screen h-screen selection:bg-blue-400/20">
                        <div className="body h-full w-[65%]">
                            <Dashboard />
                        </div>
                        <div className="blur-bg h-full w-[35%] flex flex-col pl-16 pr-12">
                            <Search />
                            <Details />
                        </div>
                    </div>
                </UnitContext.Provider>    
            </CurrentWeatherContext.Provider>
        </CurrentCityContext.Provider>
    );
}

export default App;
