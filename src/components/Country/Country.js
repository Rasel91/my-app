import React from 'react';
import './Country.css'


// Use Destructuring The value
const Country = (props) => {
    const {area,population,region,name,flags}= props.
    country;

    // console.log(props.country);
    return (
        <div className='country'>
            <h1>Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population:{population}</h3>
            <p><small>Region:</small> {region}</p>
            <p>Area:{area}</p>
        </div>
    );
};

export default Country;