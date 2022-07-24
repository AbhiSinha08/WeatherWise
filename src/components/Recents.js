import React from 'react';

const Recents = (props) => {
    return (
        <div className='flex h-[80%] flex-col justify-evenly'>
            {props.recents && props.recents.map((city, index) => (
                <button key={index}
                    value={city}
                    className='hover:bg-white/10 pl-3 -ml-3 h-14 align-middle flex flex-col justify-center transition duration-200'>
                    {city}
                </button>)
            )}
        </div>
    );
}

export default Recents;
