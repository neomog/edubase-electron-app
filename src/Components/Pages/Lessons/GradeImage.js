import * as React from 'react';
// import { useHistory } from 'react-router-dom';
// import { CardMedia } from '@material-ui/core';
// import PRIMARY1 from "./1.png";
import PRIMARY1 from "../../../Assets/Classes/PRIMARY1.png";
import PRIMARY2 from "../../../Assets/Classes/PRIMARY2.png";
import PRIMARY3 from "../../../Assets/Classes/PRIMARY3.png";
import PRIMARY4 from "../../../Assets/Classes/PRIMARY4.png";
import PRIMARY5 from "../../../Assets/Classes/PRIMARY5.png";
import PRIMARY6 from "../../../Assets/Classes/PRIMARY6.png";
import JSS1 from "../../../Assets/Classes/JSS1.png";
import JSS2 from "../../../Assets/Classes/JSS2.png";
import JSS3 from "../../../Assets/Classes/JSS3.png";
import SSS1 from "../../../Assets/Classes/SSS1.png";
import SSS2 from "../../../Assets/Classes/SSS2.png";
import SSS3 from "../../../Assets/Classes/SSS3.png";


const GradeImage = ({image}) => {
//  console.log(image)
    // if (image === "PRIMARY1") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY1})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "PRIMARY2") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY2})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "PRIMARY3") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY3})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "PRIMARY4") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY4})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "PRIMARY5") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY5})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "PRIMARY6") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY6})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "JSS1") {
    //   return ( <div  style={{backgroundImage: `url(${JSS1})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "JSS2") {
    //   return ( <div  style={{backgroundImage: `url(${JSS2})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "JSS3") {
    //   return ( <div  style={{backgroundImage: `url(${JSS3})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "SSS1") {
    //   return ( <div  style={{backgroundImage: `url(${SSS1})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "SSS2") {
    //   return ( <div  style={{backgroundImage: `url(${SSS2})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // } else if (image === "SSS3") {
    //   return ( <div  style={{backgroundImage: `url(${PRIMARY2})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
    //   )
    // }
    switch(image) {
        case 'PRIMARY1':
          return <div  style={{backgroundImage: `url(${PRIMARY1})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
        case 'PRIMARY2':
          return <div  style={{backgroundImage: `url(${PRIMARY2})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'PRIMARY3':
          return <div  style={{backgroundImage: `url(${PRIMARY3})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'PRIMARY4':
          return <div  style={{backgroundImage: `url(${PRIMARY4})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'PRIMARY5':
          return <div  style={{backgroundImage: `url(${PRIMARY5})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'PRIMARY6':
          return <div  style={{backgroundImage: `url(${PRIMARY6})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'JSS1':
          return <div  style={{backgroundImage: `url(${JSS1})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'JSS2':
          return <div  style={{backgroundImage: `url(${JSS2})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'JSS3':
          return <div  style={{backgroundImage: `url(${JSS3})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'SSS1':
          return <div  style={{backgroundImage: `url(${SSS1})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'SSS2':
          return <div  style={{backgroundImage: `url(${SSS2})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'SSS3':
          return <div  style={{backgroundImage: `url(${SSS3})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        default:
          return <div  style={{backgroundImage: `url(${JSS2})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
      }
    };

export default GradeImage
