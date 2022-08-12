import React, {useState, useEffect, useRef} from 'react';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Search from './components/Search';
import CurrentCityContext from './contexts/currentCityContext';
import CurrentWeatherContext from './contexts/currentWeatherContext';
import UnitContext from './contexts/unitContext';
import getWeather from './utils/weatherAPI';
import getCityImage from './utils/cityImageSearchAPI';
import ErrorContext from './contexts/errorContext';

function App() {
    const [currentCity, setCurrentCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState({});
    const [unitC, setUnitC] = useState(true);
    const [error, setError] = useState(false);
    const isInitialMount = useRef(true);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/placeholder.jpg)`;
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
                if (weatherDetails) {
                    if (weatherDetails.error) {
                        setError(weatherDetails.errorMessage);
                    }
                    else {
                        setError(false);
                        setCurrentWeather(weatherDetails);
                        const imageURL = await getCityImage(currentCity);
                        if (imageURL)
                            document.body.style.backgroundImage = `url(${imageURL})`;
                    }
                }
            }
            handleCurrentCityChange();
        }
    }, [currentCity]);

    return (
        <CurrentCityContext.Provider value={{currentCity, setCurrentCity}}>
            <CurrentWeatherContext.Provider value={currentWeather}>
                <UnitContext.Provider value={{unitC, setUnitC}}>
                    <ErrorContext.Provider value={error} >
                        <div className="flex w-screen h-screen selection:bg-blue-400/20">
                            <div className="body h-full w-[65%]">
                                <Dashboard />
                            </div>
                            <div className="blur-bg h-full w-[35%] flex flex-col pl-16 pr-12">
                                <Search />
                                <Details />
                            </div>
                        </div>
                    </ErrorContext.Provider>
                </UnitContext.Provider>    
            </CurrentWeatherContext.Provider>
        </CurrentCityContext.Provider>
    );
}

export default App;
