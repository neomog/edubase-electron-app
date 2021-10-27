import "./sidebar.css";
import SidebarLink from "./SidebarLink";


// -------------------------
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


import { Link } from "react-router-dom"

// import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// import { Dashboard } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none", 
    color: "inherit",
    '&:hover': {
      color: "inherit"
    }
  }
}))


function Sidebar(){
  const classes = useStyles();
  return(
    <div className="sidebar">
      <Link to="/" className={classes.link}>
        <SidebarLink text="Dashboard" active={true} Icon={HomeIcon} />
      </Link>
      <Link to="/lessons" className={classes.link}>
        <SidebarLink text="Lessons" Icon={SearchIcon}/>
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Exam Practice" Icon={NotificationsNoneIcon} />
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Library" Icon={MailOutlineIcon} />
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Life Skills" Icon={BookmarkBorderIcon} />
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Extracurricular" Icon={ListAltIcon} />
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Games and Fun" Icon={PermIdentityIcon} />
      </Link>
      <Link to="/" className={classes.link}>
        <SidebarLink text="Results" Icon={MoreHorizIcon}/>
      </Link>
        {/* <Button id="tweet">
            Tweet
        </Button> */}
    
    </div>
  );
}
export default Sidebar;