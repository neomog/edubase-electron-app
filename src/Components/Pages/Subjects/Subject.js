import * as React from 'react';
import { CardActionArea, Card } from '@material-ui/core';
// import dd from "./1.png"
import SubjectImage from "./SubjectImage";


export default function Subject({subject, handleClick}) {

  return (
    <Card sx={{ maxWidth: 345 }} style={{height: "75px"}} onClick={() => handleClick(subject)}>
        
      <CardActionArea>
        <SubjectImage image={subject} />
    
      </CardActionArea>
    </Card>
  );
}
