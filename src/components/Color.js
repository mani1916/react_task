import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
const Color = ({colorvalue,toogle}) => {
    // const colorvalue='Empty value'
    // console.log(colorvalue)
    // const colorstyle=colorvalue
    // console.log(toogle)
    const{art1}=useContext(DataContext)
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                    {
                        art1.map((val,i)=>
                            <tr key={val.id}>
                                <td>
                                    {val.id}
                                </td>
                                <td>
                                    {val.name}
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Color;
