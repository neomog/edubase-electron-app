import * as React from 'react';
// import { useHistory } from 'react-router-dom';
// import { CardMedia } from '@material-ui/core';
// import PRIMARY1 from "./1.png";

// import basicsciencetech from "../../../Assets/Subjects/BASIC_ST.png";
// import biology from "../../../Assets/Subjects/BIOLOGY.png";
// import businessstudy from "../../../Assets/Subjects/BUSINESS_STUDY.png";
// import geography from "../../../Assets/Subjects/GEOGRAPHY.png";
// import government from "../../../Assets/Subjects/GOVERNMENT.png";
// import literatureinenglish from "../../../Assets/Subjects/LIT_IN_ENG.png";
// import commerce from "../../../Assets/Subjects/COMMERCE.png";

import basictech from "../../../Assets/Subjects/BASIC_TECHNOLOGY.png";
import account from "../../../Assets/Subjects/ACCOUNT.png";
import agriculture from "../../../Assets/Subjects/AGRICULYURE.png";
import basicscience from "../../../Assets/Subjects/BASIC_SCIENCE.png";
import cca from "../../../Assets/Subjects/CCA.png";
import chemistry from "../../../Assets/Subjects/CHEMISTRY.png";
import civiceducation from "../../../Assets/Subjects/CIVIC_EDUCATION.png";
import computer from "../../../Assets/Subjects/COMPUTER.png";
import economics from "../../../Assets/Subjects/ECONOMICS.png";
import english from "../../../Assets/Subjects/ENGLISH.png";
import mathematics from "../../../Assets/Subjects/MATHEMATICS.png";
import phe from "../../../Assets/Subjects/PHE.png";
import physics from "../../../Assets/Subjects/PHYSICS.png";


const SubjectImage = ({image}) => {
 console.log(image)
    switch(image) {
        case 'Agricultural Science':
          return <div  style={{backgroundImage: `url(${agriculture})`, width: "300px", height: "300px", backgroundColor: "red"}} ></div>
        case 'Basic Science':
          return <div  style={{backgroundImage: `url(${basicscience})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Basic Technology':
          return <div  style={{backgroundImage: `url(${basictech})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Christian Religious Studies':
          return <div  style={{backgroundImage: `url(${physics})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Civic Education':
          return <div  style={{backgroundImage: `url(${civiceducation})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Cultural and Creative Art':
          return <div  style={{backgroundImage: `url(${cca})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'English Studies':
          return <div  style={{backgroundImage: `url(${english})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Home Economics':
          return <div  style={{backgroundImage: `url(${economics})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'ICT':
          return <div  style={{backgroundImage: `url(${computer})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Mathematics':
          return <div  style={{backgroundImage: `url(${mathematics})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Physical and Health Education':
          return <div  style={{backgroundImage: `url(${phe})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        case 'Social Studies':
          return <div  style={{backgroundImage: `url(${account})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
        default:
          return <div  style={{backgroundImage: `url(${chemistry})`, width: "300px", height: "300px", backgroundPosition: "cover"}} ></div>
      }
    };

export default SubjectImage
