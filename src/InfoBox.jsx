import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  './InfoBox.css';

import Typography from '@mui/material/Typography';
export default function InfoBox({Info}){
  const INIT_URL="https://cdn.24.co.za/files/Cms/General/d/9361/25c7ac4faf53459183019d477be4da1c.jpg";
  const COLD_URL="https://tse3.mm.bing.net/th?id=OIP.9ShlqkYDZjtMW-yIcybq1gHaEK&pid=Api&P=0&h=180";
  const RAINY_URL="https://tse4.mm.bing.net/th?id=OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK&pid=Api&P=0&h=180";
  
  return(
        <div className="InfoBox">
        <h1>WEATHER INFO</h1>
       <div className="card-container">
      <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
        sx={{ height: 140 }} 
        image={Info.humidity>80? RAINY_URL : Info.temp>20?INIT_URL:COLD_URL}
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