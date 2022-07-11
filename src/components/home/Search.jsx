import React from "react";
import  { useState } from "react";
import axios from "axios";
import "../css/Search.css";
import { useDispatch } from "react-redux";
import { adddata } from "../../redux/action";
import { useEffect } from "react";

export default function Search({  searchCity }) {
  var api =`dfbfa90f298297bd32d78348f443a400`;
    const [currentCity, setCurrentCity] = useState("");
    const dispatch=useDispatch();
    const [coordinates, setCoordinates] = useState({});
    
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        }
      );
    },[])  
    useEffect(()=>{
      if (coordinates.lat !== undefined) {

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${api}`
            )
            .then(({ data }) => {
              setCurrentCity(data.name);
              
            })
            .catch((err) => console.log(err));
        
        datas(coordinates.lat,coordinates.lng)
      }
    },[coordinates])



  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }


  function handleButtonClick() {
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${api}`)
    .then(({data})=>{
       
    let lat=data.coord.lat;
    let lon=data.coord.lon;
        datas(lat,lon)   
    }) 

    // if (currentCity.trim() === "") return;
    // searchCity(currentCity);
  }

  function datas(lat, lon){
    axios.get(`
    https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${"dfbfa90f298297bd32d78348f443a400"}`)
.then(({data})=>
{
  console.log(data)
  dispatch(adddata(data.daily))
  
})
}



  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <div className="location_img">
        <img src="https://as2.ftcdn.net/v2/jpg/02/72/89/67/1000_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" alt = "" className="location" />
      </div>
      <div className="input_box">
        <input
          className="input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder = "Search for City"
        />
      </div>
      <div className="search_img">
        <img
          className="search_btn"
          onClick={handleButtonClick}
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png"  alt =""/> 

      </div>
    </div>
  );
}