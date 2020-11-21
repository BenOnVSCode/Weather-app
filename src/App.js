import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import UI from './UI';
import {GlobalStyle} from './styles/GlobalStyle'
import Loading from './Loading';

function App() {
  const [data, setData] = useState('')
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [log, setLog] = useState('');
  const date = new Date().getHours();
  const [time, setTime] = useState('');
  const [icon, setIcon ] = useState('');
  const [temp_c, setTempc] = useState('');
  const [temp_f, setTempf] = useState('');
  const [temp_k, setTempk] = useState('');
  

  //Getting the coords
  
     if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
         setLat(position.coords.latitude);
         setLog(position.coords.longitude);
       })
     }

     // Turns the coords to city name 

     if(lat && log !== '') {
       axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${log}&localityLanguage=en`)
      .then(function (res) {
        setCity(res.data.city);
      })
     }
      
  
     //getting the data from the weather API
   if(city !== '') {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=1e70683f9d0b4f3daec155809202111&q=${city}`)
    .then(function (response) {
      if(data === '') {
         setData(response.data.current);
        setCountry(response.data.location.country);
        
      }
       setTempc(data.temp_c);
      setTempf(data.temp_f);
      setTempk(((data.temp_c + 459.67) * 5/9).toFixed(2))
    })
    
  }

  //check the conditions
  useEffect(() => {
    if(data !== '') {
      if(data.condition.text !== '') {
          
        if(date >= 5 && date <= 19) {
            setTime('day');
        }
        if (date < 5 && date > 19 ) {
            setTime('night')
        }
    
        if(time === 'day') {
            if(data.condition.text.toLowerCase() === 'clear' ) {
               setIcon('https://www.flaticon.com/svg/static/icons/svg/890/890347.svg');
            };
            if(data.condition.text.toLowerCase() === 'sunny' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/890/890347.svg');
            };
            if(data.condition.text.toLowerCase() === 'overcast') {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/263/263099.svg');
            };
            if(data.condition.text.toLowerCase() === 'partly cloudy') {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/2932/2932445.svg');
            };
            if(data.condition.text.toLowerCase() === 'light rain shower' ) {
                setIcon('https://i.ibb.co/mbBQTgV/Light-rain-shower.png');
            };
            if(data.condition.text.toLowerCase() === 'light rain' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/1/1801.svg');
            };
            if(data.condition.text.toLowerCase() === 'cloudy' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/899/899718.svg');
            };
            if(data.condition.text.toLowerCase() === 'moderate or heavy rain shower' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/3209/3209896.svg');
            };
            if(data.condition.text.toLowerCase() === 'mist' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/3314/3314025.svg');
            };
            if(data.condition.text.toLowerCase() === 'patchy rain possible' ) {
                setIcon('https://i.ibb.co/mbBQTgV/Light-rain-shower.png');
            };
            if(data.condition.text.toLowerCase() === 'thunderstormse' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/1146/1146860.svg');
            };
            
        }
        if(time === 'night') {
            if(data.condition.text.toLowerCase() === 'clear' ) {
               setIcon('https://www.flaticon.com/svg/static/icons/svg/865/865813.svg');
            };
            if(data.condition.text.toLowerCase() === 'sunny' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/865/865813.svg');
            };
            if(data.condition.text.toLowerCase() === 'overcast') {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/263/263099.svg');
            };
            if(data.condition.text.toLowerCase() === 'partly cloudy') {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/3026/3026353.svg');
            };
            if(data.condition.text.toLowerCase() === 'light rain shower' ) {
                setIcon('https://i.ibb.co/GcTBBMJ/Light-rain-shower.png');
            };
            if(data.condition.text.toLowerCase() === 'light rain' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/1/1801.svg');
            };
            if(data.condition.text.toLowerCase() === 'cloudy' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/899/899718.svg');
            };
            if(data.condition.text.toLowerCase() === 'moderate or heavy rain shower' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/3209/3209896.svg');
            };
            if(data.condition.text.toLowerCase() === 'mist' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/3314/3314025.svg');
            };
            if(data.condition.text.toLowerCase() === 'patchy rain possible' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/1/1801.svg');
            };
            if(data.condition.text.toLowerCase() === 'thunderstormse' ) {
                setIcon('https://www.flaticon.com/svg/static/icons/svg/1146/1146860.svg');
            };
            
        }
    }
    }


  })



      

  
  return (
    <>
      <GlobalStyle />
      {data !== '' ? <UI
      icon={icon}
      city={city}
      condition={data.condition.text}
      country={country}
      tempc={temp_c}
      tempf={temp_f}
      tempk={temp_k}
    /> :  <Loading />  }
      
      
    </>
  );
}

export default App;
