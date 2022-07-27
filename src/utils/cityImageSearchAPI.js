import axios from "axios";
import * as indexedDB from './indexedDB';

const url = "https://customsearch.googleapis.com/customsearch/v1";
const key = process.env.REACT_APP_GOOGLE_CUSTOM_SEARCH_API_KEY;
const searchEngineID = "148e6cd9dc2db4305";
const params = {
    "cx": searchEngineID,
    "imgSize": "HUGE",
    "imgType": "photo",
    "num": 1,
    "orTerms": "Sights",
    "q": "city_name",
    "searchType": "image",
    key: key
}

export default async function getCityImage(city) {
    let imageURL;

    const cachedResult = await indexedDB.retrieve(city);
    if (cachedResult)
        return cachedResult.image;

    await axios.get(url, {
        params: {
            ...params,
            q: city
        }
    })
    .then(res => res.data)
    .then(response => {
        imageURL = response.items[0].link;
        indexedDB.add(city, imageURL);
    })
    .catch((error) => {
        console.error(error);
    })

    return imageURL;
}