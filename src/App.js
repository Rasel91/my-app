import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
         <Header></Header>
      <Countries> </Countries>
      <Footer> </Footer>
 
  
   {/* <Countries></Countries> */}
    </div>
  );
}



/* function Countries (){ 
  const [countries, setCountries] = useState([]);
   useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])

   return(
    <div> 
      <h1> This is many countries </h1>
      <h3> Available Countries: {countries.length} </h3>
      {
        // countries.map(country=> console.log(country)  )
        countries.map(country=> <CountryUser name={country.name.common} region={country.region} area={country.area}languages={country.languages?.spa} >

        </CountryUser>)
      }CountryUser
    </div>
   )
}


function CountryUser(props){
  return(
    <div className='country'>
     <h2> Country Name: {props.name}</h2>
     <h4> Country Population: {props.population}</h4>
     <h5> Country Region: {props.region}</h5>
      <p> Area: {props.area}</p>
    </div>
  )
} */
export default App;
