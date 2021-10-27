import * as React from 'react';
// import { CardActionArea, Typography, CardContent, Card } from '@material-ui/core';
import pdf from "./PHY.pdf";
import vid from "./vid.mp4";

export default function Term({topic, term, handleClick}) {
  if (term === "First Term") {
    return (
      <div onClick={() => handleClick(topic)} style={{width: "100%", height:"100%"}} >
       <object data={pdf} type="application/pdf" width="100%" height="100%">
           <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
       </object>
      </div>
     
       );
  } else {
    return (
      <div style={{width: '50%', margin: 'auto'}}>
        {/* <iframe title="video" height="100%" width="100%" src={topic} allowfullscreen frameborder="0"></iframe> */}
        <video width="400" height="300" controls>
         <source src={vid} type="video/mp4"></source>
       </video>
      </div>
       

    );
  }
  
}
