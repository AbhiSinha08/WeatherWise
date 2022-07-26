import React, {createContext} from "react";

const currentWeatherContext = createContext({
    currentWeather: {},
    setCurrentWeather: (city) => {}
})

export default currentWeatherContext;