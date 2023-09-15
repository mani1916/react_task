import React from 'react';
// import { useState } from 'react';
function Toogle({ toogle, setToggle }) {

    const change = () => {
        // console.log(toogle)
        var c = !toogle;
        setToggle(c);
    };
    return (
        <div className='Toogle'>
            <button onClick={change}>Change to black</button>
        </div>
    );
}

export default Toogle;
