import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  './InfoBox.css';

import Typography from '@mui/material/Typography';
export default function InfoBox(){
  const INIT_URL="https://images.unsplash.com/photo-1599435214324-d71096238079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let Info={
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
            <div className='card-container'>
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
        <Typography variant="body2" color="text.secondary">
        <div>Temperature= {Info.temp}&deg;C</div>
        <div>Humadity= {Info.humidity}</div>
        <div>Min-Temp= {Info.tempMin}</div>
        <div>Max-Temp= {Info.tempMax}</div>
        <div>Feelings={Info.feelsLike}&deg;C  </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>

    )
}