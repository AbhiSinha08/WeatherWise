import React, {createContext} from "react";

const CurrentWeatherContext = createContext({
    currentWeather: {},
    setCurrentWeather: (city) => {}
})

export default CurrentWeatherContext;