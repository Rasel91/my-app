import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
 const [countries, setCountry]=useState([]);
 useEffect(()=>{
 fetch(`https://restcountries.com/v3.1/all`).then(res=>res.json()).then(data=>setCountry(data))

 },[])

    return (
        <div >
            <h2> Countries js Components:{countries.length} </h2>

        <div className='countries-container'>
            {
              countries.map(country=> 
              <Country country={country} key={country.cca3}>
              
              </Country>)
            }
        </div>
        </div>
    );
}


// function Country(props){
//     return(
//         <div>
            
//         </div>
//     )
// }


export default Countries;