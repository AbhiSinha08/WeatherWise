import React, {useState, useEffect} from 'react';
import Recents from "./Recents";
import SearchBar from './SearchBar';
import capitalize from '../utils/capitalize';
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

    function updateRecents(searchTerm) {
        setRecents((prev) => {
            const city = capitalize(searchTerm);
            return add([...prev], city);
        });
    }

    useEffect(() => {
        if (recents) {
            localStorage.setItem("recentSearchHistory", JSON.stringify(recents));
        }
    }, [recents]);
    
    return (
        <div className='w-full h-[50%] pt-12 text-lg text-cream/70'>
            <SearchBar updateRecents={updateRecents} />
            <hr className='mr-24' />
            <Recents recents={recents} />
        </div>
    );
}

export default Search;
