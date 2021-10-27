import * as React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@material-ui/core';
import jss1 from "./jss1.jpg";

// const handleClick = (text) => {
//   console.log(text)
// }

export default function HomeItem({text}) {
  return (
    <div >
      <div onClick={(text) => console.log(text)}>Hello</div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={jss1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}
          </Typography>
          <Typography variant="body2" secondary="true">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
