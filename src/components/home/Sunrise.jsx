import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../css/sunrise.css";
const Sunrise = () => {
   

    const [sunrise,setSunrise] = useState("");
    const [sunset,setSunset] = useState("");
    const sune= useSelector((store)=>
    store.sunrise
      
    )
    useEffect(()=>{
        let sunrise = sune[2];
        let sunRtime = new Date(sunrise * 1000);
        setSunrise(sunRtime.toLocaleTimeString());
    
        let sunset = sune[3];
        let sunStime = new Date(sunset * 1000);
        setSunset(sunStime.toLocaleTimeString());
    },[sune])

    console.log(sune)
  return (
    sune &&
    <div >
        <div className='sun'>
        <p className='sun1' >Pressure {sune[0]}</p>
        <p className='sun2' >Humidity {sune[1]}</p>
        </div>
        <div className='sun5'>
        <p className='sun3'>Sunrise  {sunrise}</p>
        <p className='sun4'>sunset   {sunset}</p>
        </div>
    </div>
  )
}

export default Sunrise