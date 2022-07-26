import React, {useState, useEffect} from 'react';
import Recents from "./Recents";
import SearchBar from './SearchBar';
import add from '../utils/recentsArrayMethods';

const Search = () => {
    const [recents, setRecents] = useState();

    useEffect(() => {
        setRecents(() => {
            let data = JSON.parse(localStorage.getItem("recentSearchHistory"));
            if (data === null) {
                data = [];
            }
            return data;
        })
    }, []);

    function updateRecents(city) {
        setRecents((prev) => {
            return add([...prev], city);
        });
    }

    useEffect(() => {
        if (recents) {
            localStorage.setItem("recentSearchHistory", JSON.stringify(recents));
        }
    }, [recents]);
    
    return (
        <div className='w-full max-h-[50%] pt-12 text-lg text-cream/50'>
            <SearchBar updateRecents={updateRecents} />
            <hr className='mr-24 mb-2' />
            <Recents recents={recents} />
            <hr className='text-cream/20 mr-4' />
        </div>
    );
}

export default Search;
