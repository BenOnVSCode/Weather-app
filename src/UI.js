import React, {useState, useEffect} from 'react'
import { CityName, Condition, Icon, Temp, UIContainer } from './styles/Home';

const UI = ({icon, condition, city, tempc, tempf, tempk, country}) => {
    const [num, setnum] = useState(1);
    const [temp, setTemp] = useState(tempc);


   const tempHandler =  () => {
       if(num <  3) {
           setnum(num + 1 )
       } 
       if(num === 3 ) {
           setnum(1)
       }
        
   }

   useEffect(() => {
       if(num === 1) {
        setTemp(tempc + '°C');
       }
       if(num === 2) {
           setTemp(tempf + '°F')
       }
       if (num === 3) {
           setTemp(tempk + '°K')
       }
   })
    

    return (
        <UIContainer>
            <CityName>{city},{country}</CityName>
            {icon !== '' ? <Icon src={icon} /> : "" }
            <Condition>{condition}</Condition>
            <Temp onClick={tempHandler} >{temp}</Temp>
       </UIContainer>
    );
}

export default UI
