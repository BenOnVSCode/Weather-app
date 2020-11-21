import React, {useState, useEffect} from 'react'
import { LoadingContainer, LoadingTitle } from './styles/Loading'

const Loading = () => {

    const [num, setNum] = useState(0);
    const [points, setPoints] = useState('');
    useEffect(() => {
        
        for(let i = 0 ; i < 10000 ; i++) {
            setNum(num + 1)
            if(num === 10 || num === 25 || num === 50 ) {
                setPoints(points + '.' )
            } 
            if(points.length === 3) {
                setPoints('')
                setNum(0)
            }
        }
    })
    



    return (
        <LoadingContainer>
            <LoadingTitle>Loading, Getting the information {points}</LoadingTitle>
        </LoadingContainer>
    )
}

export default Loading
