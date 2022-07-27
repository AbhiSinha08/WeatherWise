import axios from "axios";

const key = "e165312d4ab34ac2b83233856222507";
const url = "https://api.weatherapi.com/v1/forecast.json";
const params = {
    key: key,
    q: "city_name",
    days: 3,
    aqi: "no",
    alerts: "yes"
}

export default async function getWeather(city) {
    let response;
    
    await axios.get(url, {
        params: {
            ...params,
            q: city
        }
    })
    .then(res => res.data)
    .then((res) => {
        response = res;
    })
    .catch((error) => {
        console.log(error);
        if (error.response) {
            const code = error.response.status;
            if (code === 400) {
                response = {
                    error: true,
                    errorMessage: `No Matching location found: ${city}`
                }
            }
            else if (code === 401) {
                response = {
                    error: true,
                    errorMessage: "API key is invalid"
                }
            }
        }
    })

    return response;
}