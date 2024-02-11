import React, { useState,useEffect } from 'react'
import Left from './components/Left'
import Right from './components/Right' 

function App() {
  const [city, setcity] = useState("")
  const [weatherData, setweatherData] = useState(null)

  const api=`https://api.weatherapi.com/v1/current.json?key=5082cad53cd24f58bab62024241102&q=${city}&aqi=no`
  
  useEffect(()=>{
    fetch(api)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error");
      }
     return  response.json();
    })
    .then((data)=>{
      console.log(data)
      setweatherData(data)
  
    })
    .catch((e)=>{
  console.log(e)
    })
  },[city])
  return (
   <div className='w-full h-screen bg-[#1F213A] justify-center flex items-top'>
    <div className=' mt-40 w-1/5 h-1/2'>
    <Left 
  setcity={setcity}
  details={{
    temp: weatherData && weatherData.current ? weatherData.current.temp_c : null,
    location:weatherData && weatherData.location ? weatherData.location.name:null,
    condition:weatherData && weatherData.location ? weatherData.current.condition.text:null,
    isDay:weatherData && weatherData.location ? weatherData.current.is_Day:null,
    time:weatherData && weatherData.location ? weatherData.location.localtime:null,
  }}
/>

    </div>
    <div className=' mt-40 w-1/3 h-1/3 p-5 grid grid-cols-2 gap-6'>
      <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
      <>
      <Right 
      details={{
          title: "Wind Status",
          value: weatherData && weatherData.current ? weatherData.current.wind_mph : null,
          unit: "mph",
          direction: weatherData && weatherData.current ? weatherData.current.wind_dir : null
      
      }}
      />
       <Right 
       details={{
        title: "Humidity",
        value: weatherData && weatherData.current ? weatherData.current.humidity : null,
        unit: "%"
    
      }}
      />
      <Right
        details={{
          title: "Visibility",
          value: weatherData && weatherData.current ? weatherData.current.vis_miles : null,
          unit: "miles"
      
      }}
      />
     
     < Right 
      details={{
        title: "Air Pressure",
        value: weatherData && weatherData.current ? weatherData.current.pressure_mb : null,
        unit: "mb"
    
  }}
     />
      </>
    </div>
   </div>
  )
}

export default App