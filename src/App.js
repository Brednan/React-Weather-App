import './App.css';
import Title from './Components/Title/Title'
import FormInput from './Components/Input/FormInput.js'
import React,{useState} from 'react'
import Details from './Weather-Details/Details'

function App() {

  const [data, setData] = useState([])
  let renderer

  const searchLocation = (res) =>{
    if(res.weather && res.main.temp){
      setData({
        description: res.weather[0].description,
        temperature: res.main.temp.toString()
    })
    }
    else{
      setData(res)
    }

  }
  if(data === "404"){
    renderer = <p>Invalid Location</p>
  }
  else if(data.description){
    renderer = <Details description={data.description} temperature={data.temperature}/>
  }
  return (
    <div className="App">
      <Title/>
      <FormInput submission={searchLocation}/>
      {renderer}
    </div>
  );
}

export default App;
