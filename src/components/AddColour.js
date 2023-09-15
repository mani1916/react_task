import React from 'react';

const AddColour = ({color,setColor}) => {
    // const colorvalue=''
    return (
        <div className='AddColour'>
            <input type="text" 
                placeholder='Enter colour'
                // value={color}
                onChange={(e)=>setColor(e.target.value)}
                required
            />
        </div>
    );
}

export default AddColour;
