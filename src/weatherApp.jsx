import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({feelsLike:24.84,
        city:"Delhi",
          temp:25.05,
          tempMin:25.05,
          tempMax:25.05,
          humidity:47.25,
          weather:"haze,"});
let updateInfo=(newInfo)=>{
       setweatherInfo(newInfo);
}
    return(
        <div style={{textAlign:"center"}}>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}
