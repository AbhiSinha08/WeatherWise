import React, {useContext} from 'react';
import CurrentCityContext from '../contexts/CurrentCityContext';

const Recents = (props) => {
    const {setCurrentCity} = useContext(CurrentCityContext);

    return (
        <div className='flex h-[80%] flex-col justify-evenly'>
            {props.recents && props.recents.map((city, index) => (
                <button key={index}
                    onClick={(event) => {setCurrentCity(event.target.value)}}
                    value={city}
                    className='hover:bg-white/10 hover:text-cream/70 pl-3 -ml-3 h-14 align-middle flex flex-col justify-center transition duration-200'>
                    {city}
                </button>)
            )}
        </div>
    );
}

export default Recents;
