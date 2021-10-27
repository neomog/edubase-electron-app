
// import {Button, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import PRIMARY1 from "../../../Assets/images/1.png";
import PRIMARY2 from "../../../Assets/images/2.png";
import PRIMARY3 from "../../../Assets/images/3.png";
import PRIMARY4 from "../../../Assets/images/4.png";
import PRIMARY5 from "../../../Assets/images/5.png";
import PRIMARY6 from "../../../Assets/images/6.png";
import JSS1 from "../../../Assets/images/7.png";
import JSS2 from "../../../Assets/images/8.png";
import JSS3 from "../../../Assets/images/9.png";
import SSS1 from "../../../Assets/images/10.png";
import SSS2 from "../../../Assets/images/11.png";
import SSS3 from "../../../Assets/images/12.png";

// CUSTOM STYLES
const useStyles = makeStyles((theme) => ({
    searchbox: {
      width: "100%",
      height: "200px",
      textAlign: "center",
    //   backgroundImage: `url(${PRIMARY4})`,
      backgroundSize: "cover",
      marginTop: "50px",
      marginRight: "5px",
    },
    box: {
        border: "10px solid red",
    },
    button: {
        marginLeft: "10px",
        // marginTop: "5px"
    },
    input: {
        width: "50%",
        padding: "10px",
        borderRadius: "3px solid none",
        background: "#39444d",
        color: "#fff",
        border: "none",
        outline: "none",
        fontSize: "15px"
    },
    form: {
        marginTop: "40px"
    }
  }));

const HeroContent = ({grade}) => {
    // console.log(grade)
    const classes = useStyles();
    switch(grade) {
        case 'PRIMARY1':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY1})`}}></div>
        case 'PRIMARY2':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY2})`}}></div>
        case 'PRIMARY3':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY3})`}}></div>
        case 'PRIMARY4':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY4})`}}></div>
        case 'PRIMARY5':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY5})`}}></div>
        case 'PRIMARY6':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${PRIMARY6})`}}></div>
        case 'JSS1':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${JSS1})`}}></div>
        case 'JSS2':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${JSS2})`}}></div>
        case 'JSS3':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${JSS3})`}}></div>
        case 'SSS1':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${SSS1})`}}></div>
        case 'SSS2':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${SSS2})`}}></div>
        case 'SSS3':
          return <div className={classes.searchbox} style={{backgroundImage: `url(${SSS3})`}}></div>
        default:
          return <div className={classes.searchbox} >HELLO, KINDLY UPLOAD SOME IMAGES</div>
      }
    };

export default HeroContent
