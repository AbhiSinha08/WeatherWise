import React, {useState, useContext} from 'react';
import { IconContext } from "react-icons";
import { MdSearch } from 'react-icons/md';
import CurrentCityContext from '../contexts/currentCityContext';
import capitalize from '../utils/capitalize';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const {setCurrentCity} = useContext(CurrentCityContext);

    function search(event) {
        const city = capitalize(searchTerm);
        props.updateRecents(city);
        setCurrentCity(city);
        setSearchTerm("");
        event.preventDefault();
    }

    return (
        <div>
          <form>
            <button
                type="submit"
                onClick={search}
                className='h-24 w-24 bg-orange hover:bg-orange/80 transition duration-200 absolute top-0 right-0 text-base flex justify-center items-center'>
                <IconContext.Provider value={{ size: 40 }}>
                    <MdSearch />
                </IconContext.Provider>
            </button>
            <input value={searchTerm} autoComplete="off" type="text"
                onChange={(e) => {setSearchTerm(e.target.value)}}
                placeholder="Search for a city..."
                className='bg-transparent h-12 placeholder:italic placeholder:text-cream/40 focus:placeholder:text-transparent focus:outline-0 w-96'>
            </input>
          </form>
        </div>
    );
}

export default SearchBar;
