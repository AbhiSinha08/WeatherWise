import React from 'react';

const Error = (props) => {
    return (
        <div className='flex-grow text-3xl text-shadow pt-12'>
            {props.message}
        </div>
    );
}

export default Error;
