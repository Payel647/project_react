import {useState} from 'react';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';



export default function SearchBox({ updateInfo}){
    let [City,setCity]=useState("");
    const  API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="c50a7e3bc3a5826f2adb51c79f4cf9ec";

    let getWeatherInfo=async()=>{
       let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);

       let result={
        city:City,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        feelsLike:jsonResponse.main.feels_like,
        description:jsonResponse.weather[0].description,
        main:jsonResponse.weather[0].main,

        humidity:jsonResponse.main.humidity,
        wind:jsonResponse.wind.speed,

        country:jsonResponse.sys.country,

       }
       console.log(result); 
       return result;
     
    }



    let handleChange=(e)=>{
        setCity(e.target.value);
    };

    let handleSubmit=async(evt)=>{
        evt.preventDefault();
        console.log(City);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }   
     return (
    <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                    label="City Name"
                    variant="outlined" 
                    required
                    value={City} 
                    onChange={handleChange}  />
                <br></br>
                <br></br>

                <Button variant="contained" type="submit">
                    Send
                </Button>
            </form>
 
    </div>
    )
}