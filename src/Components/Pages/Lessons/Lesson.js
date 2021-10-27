import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CardActionArea, Card } from '@material-ui/core';
import GradeImage from './GradeImage';
// import PRIMARY1 from "./1.png";
// import PRIMARY1 from "../../../Assets/Classes/PRIMARY1.png";
// import PRIMARY2 from "../../../Assets/classes/PRIMARY2.png";
// import PRIMARY3 from "../../../Assets/classes/PRIMARY3.png";
// import PRIMARY4 from "../../../Assets/classes/PRIMARY4.png";
// import PRIMARY5 from "../../../Assets/classes/PRIMARY5.png";
// import PRIMARY6 from "../../../Assets/classes/PRIMARY6.png";
// import JSS1 from "../../../Assets/classes/JSS1.png";
// import JSS2 from "../../../Assets/classes/JSS2.png";
// import JSS3 from "../../../Assets/classes/JSS3.png";
// import SSS1 from "../../../Assets/classes/SSS1.png";
// import SSS2 from "../../../Assets/classes/SSS2.png";
// import SSS3 from "../../../Assets/classes/SSS3.png";


// const display = (item) => {
//   switch(item) {
//     case 'PRIMARY1':
//       return <CardMedia component="img" height="140" image={PRIMARY1} alt="green iguana" />
//       default:
//         return <CardMedia component="img" height="140" image={PRIMARY1} alt="green iguana" />
//   }
// }

export default function Lessons({item}) {

  const history = useHistory();

  function handleClick(el) {
    history.push({
      pathname: "/subjects",
      state: el
    })
 
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={{border: "none", boxShadow: "none"}} onClick={() => handleClick(item)}>
      <CardActionArea>
      <GradeImage image={item.classid} />
      </CardActionArea>
    </Card>
  );
}
