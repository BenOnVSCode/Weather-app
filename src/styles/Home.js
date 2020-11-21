import styled from 'styled-components'


export const UIContainer = styled.div`
    display: flex ; 
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    width: 100vw ;
    height: 100vh ;
    background: #34626c ;
`


export const CityName = styled.h1 `
    font-weight: lighter ;
    font-size: clamp(1rem, 5vw, 3rem); 
    margin: 0rem 0 2rem 1rem  ; 
    color: #e5e5e5 ;
`

export const Icon = styled.img `
    width: 250px ;
    height: 250px ;
`

export const Condition  = styled.h2 `
    font-weight: 300 ;
    font-size: clamp(1rem, 5vw, 3rem); 
    margin: 1rem 0 1rem 1rem  ; 
    color: #e5e5e5 ;
`

export const Temp = styled.h3 `
    font-weight: 200 ;
    font-size: clamp(1rem, 5vw, 2rem); 
    color: #e5e5e5 ;
    cursor: pointer;
`