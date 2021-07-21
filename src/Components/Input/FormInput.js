import React, {useState} from 'react';
import Styles from './FormInput.module.css'

const FormInput = (props) =>{
    const [textVal, setTextVal] = useState('')
    const [unit, setUnits] = useState('metric')

    const url1st = "https://api.openweathermap.org/data/2.5/weather?q="
    const url2nd = "&appid=8d6e5706b17fb3303800fea3091696e1&units=metric"

    const submitHandler = (event) =>{
        if(textVal.trim().length > 0){
            fetch(url1st + textVal + url2nd)
                .then(res =>{
                    if(res.ok){
                        return res.json()
                    }
                    else if(res.status === 404){
                        return "404"
                    }
                })
                .then(data => props.submission(data))
                .catch(() => alert("Unable to connect to service!"))
            event.preventDefault()
        }
        else{
            alert("Please enter a location!")
        }
    }

    const onTextChange = (event) =>{
        setTextVal(event.target.value)
    }

    return (
    <div className={Styles.FormInput}>
        <form onSubmit={submitHandler}>
            <label>
                Location:
                <input value={textVal} onChange={onTextChange}/>
            </label>
            <button type="submit">GO</button>
        </form>
    </div>)
}

export default FormInput