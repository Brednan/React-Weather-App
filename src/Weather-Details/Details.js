import React,{useState} from 'react'
import Styled from './Details.module.css'

const Details = (props) =>{

    return(
        <div>
            <div className={Styled.description}>
                <h1>Description: </h1><p>{props.description}</p>
            </div>
            <div className={Styled.temperature}>
                <h1>Temperature: </h1><p>{props.temperature} °C</p>
            </div>
        </div>)
}

export default Details