import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  './InfoBox.css';

import Typography from '@mui/material/Typography';
export default function InfoBox(){
  const INIT_URL="https://cdn.24.co.za/files/Cms/General/d/9361/25c7ac4faf53459183019d477be4da1c.jpg";
    let Info={
      feelsLike:24.84,
      city:"Delhi",
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47.25,
        weather:"haze,"
    }

    return(
        <div className="InfoBox">
        <h1>Weather info- {Info.weather}</h1>
       <div className="card-container">
      <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature= {Info.temp}&deg;C</p>
        <p>Humadity= {Info.humidity}</p>
        <p>Min-Temp= {Info.tempMin}</p>
        <p>Max-Temp= {Info.tempMax}</p>
        <p>
          The weather can be described as <i>{Info.weather}</i>and
          Feelings like {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
    </div>
    </div>

    )
}