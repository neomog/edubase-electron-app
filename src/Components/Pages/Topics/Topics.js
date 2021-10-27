import * as React from "react";
import Header from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
// import doc from "./PHY.pdf";
// import doc from "./vid.mp4";
// import HeroContent from "./HeroContent";
import Topic from "./Topic";

import { useLocation } from "react-router-dom";



export default function Topics({ terms }) {
  const location = useLocation();

  const props = location.state.subject;


  function handleClick(el) {
  // const params = location.state;
  }

  return (
    <div className="container">
      <div className="headercontainer">
        <Header />
      </div>
      <div className="mainContentFlex">
        <div className="side-fix">
          <Sidebar />
        </div>
        <div className="mainContentMain">

          <div className="mainContent-contentpdf">

              <div style={{width: "100%", height: "100vh", margin: "auto"}}>
                <Topic term={props}  handleClick={handleClick} />
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
