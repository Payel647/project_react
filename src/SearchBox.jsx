import {useState} from 'react';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';



export default function SearchBox(){
    let [City,setCity]=useState("");
    const  API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="c7b0dfaaad532a01b5d12b81561ce420";

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
     
    }



    let handleChange=(e)=>{
        setCity(e.target.value);
    };

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(City);
        setCity("");
        getWeatherInfo();
    }   
     

    return (
    <div className='Searchbox'>
            <h3>Search box</h3>
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