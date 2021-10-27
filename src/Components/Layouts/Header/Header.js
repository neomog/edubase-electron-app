// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
// import Home from "./Pages/Home";
// import College from "./Pages/Register";
// import About from "./Pages/Login";
// import Personal from "./Pages/Profile";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    position: 'relative',
    marginBottom: '40px',
    color: "red"
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      }}},
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },

}));

// function handleClick() {

//   console.log('You clicked submit.');
// }



const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                Akada
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      
                      to="/"
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> College </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      
                      to="/"
                    >
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> About</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      
                      to="/"
                    >
                      <ListItemIcon>
                        <BookmarksIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Personal </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button style={{color: "#fff"}}
                    variant="text"
                    component={Link}
                    to="/lessons"
                    color="default"
                  >
                    <HomeIcon />
                    Lesson
                  </Button>
                  <Button style={{color: "#fff"}}
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    <SchoolIcon />
                    Exam Practice
                  </Button>
                  <Button style={{color: "#fff"}}
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    <PersonIcon />
                    Login / Register
                  </Button>
                  <Button style={{color: "#fff"}}
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    <BookmarksIcon />
                    Profile
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
    </div>
  );
};

export default Header;
