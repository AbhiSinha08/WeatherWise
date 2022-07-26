import React, {createContext} from "react";

const currentCityContext = createContext({
    currentCity: "",
    setCurrentCity: (city) => {}
})

export default currentCityContext;