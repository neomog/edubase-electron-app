import * as React from 'react';
import { CardActionArea, Typography, CardContent, Card } from '@material-ui/core';


export default function Term({term, handleClick}) {

  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#39444d", color: "#ffffff"}} onClick={() => handleClick(term)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom style={{textAlign: "center"}} variant="h5" component="div" >
            {term}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}