import React, {useContext, useEffect, useRef} from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import { IconContext } from "react-icons";
import UnitContext from '../contexts/unitContext';

const UnitToggle = () => {
    const {unitC, setUnitC} = useContext(UnitContext);
    const isInitialMount = useRef(true);

    useEffect(() => {
        const data = localStorage.getItem("prefersCelsius");
        if (data)
            setUnitC((data === 'true'));
    }, [])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem("prefersCelsius", unitC.toString());
        }
    }, [unitC])

    return (
        <div className='flex items-center text-3xl group font-semibold bottom-10 mr-2 relative'>
            <span className='text-white/70 group-hover:text-white/90 transition duration-500 mr-1'>
                &deg;F
            </span>
            <button
            onClick={() => {setUnitC(!unitC)}}
            className="pt-1 text-white/80 group-hover:text-white transition duration-500">
                <IconContext.Provider value={{ size: 45 }}>
                    {unitC ? <MdToggleOn /> : <MdToggleOff />}
                </IconContext.Provider>
            </button>
            <span className='text-white/70 group-hover:text-white/90 transition duration-500'>
                &deg;C
            </span>
        </div>
    );
}

export default UnitToggle;
