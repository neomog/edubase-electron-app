
import React, { useState } from "react";
import {Button, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./hero.jpeg"

// CUSTOM STYLES
const useStyles = makeStyles((theme) => ({
    searchbox: {
      width: "100%",
      height: "200px",
      textAlign: "center",
      backgroundImage: `url(${Hero})`,
      marginTop: "30px",
      marginRight: "5px",
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

  

const HomeSearch = ({searchGrade}) => {
    const classes = useStyles();
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        searchGrade(input);
    }

    return (
        <div className={classes.searchbox}>
            <div style={{width: "70%", margin: "auto", paddingTop: "20px"}}>

            
            <Typography variant="h2" style={{color: "#39444d"}}>Welcome Student</Typography>
            <form action="/" method="get" className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">Search blog posts</span> */}
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="search" className={classes.input} 
            onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        
        <Button className={classes.button} color="primary" variant="contained" type="submit">Search</Button>
    </form>
    </div>
        </div>
    
    
)};

export default HomeSearch
