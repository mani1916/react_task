import React from 'react';
const Color = ({colorvalue,toogle}) => {
    // const colorvalue='Empty value'
    // console.log(colorvalue)
    // const colorstyle=colorvalue
    // console.log(toogle)
    return (
        <div>
            <div className='colorvalue' style={{backgroundColor:colorvalue,color:!toogle?'black':'white'}}>
                <p>{colorvalue}</p>
            </div>
        </div>
    );
}

export default Color;
