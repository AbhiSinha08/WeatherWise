import React, {createContext} from "react";

const CurrentCityContext = createContext({
    currentCity: "",
    setCurrentCity: (city) => {}
})

export default CurrentCityContext;