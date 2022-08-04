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
        <span className='sun111' >Pressure <br></br><div  className='sun31'>  {sune[0]}</div></span>
        <span className='sun112' >Humidity <br></br><div  className='sun31'>{sune[1]}</div></span>
        </div>
        <div className='sun10'>
        <span className='sun3'>Sunrise<br></br><div  className='sun31'>{sunrise}</div> </span>
        <span className='sun4'>Sunset<br></br> <div  className='sun31'>{sunset}</div></span>
        </div>
        <div className='sun41'>
        <img
                src="https://i.postimg.cc/tJYMcGyS/imgonline-com-ua-resize-Gj-Y8u6-SNDXn-TS.jpg"
                alt=""
              />
        </div>
    </div>
  )
}

export default Sunrise