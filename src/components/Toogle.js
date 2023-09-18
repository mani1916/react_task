import React, { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataContext, { DataProvider } from '../context/DataContext';
// import { useState } from 'react';
function Toogle({ toogle, setToggle }) {
    const{art1,art,Setart,Setart1}=useContext(DataContext)
    useEffect(() => {
        document.title = "About Page";  
      }, []);

      const change = () => {
        //   var article=JSON.parse(localStorage.getItem('article')|| '[]')
        //   console.log(article)
        const x = [...art]; // Create a shallow copy of art
        const c = [...art1]; // Create a shallow copy of art1
        c.push(x.pop());
        // article.push(x)
        // localStorage.setItem('art1', JSON.stringify(c));
        // localStorage.setItem('art', JSON.stringify(x));
    
        Setart(x);
        // localStorage.setItem('article',JSON.stringify(x))
        Setart1(c);
      };
    return (
        <div className='Toogle'>
            <button onClick={change}>setart</button>
            <button><Link to='/1'>Change to black</Link></button>

            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                    {
                        art.map((val,i)=>
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

export default Toogle;
