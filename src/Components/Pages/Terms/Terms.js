import * as React from "react";
import Header from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import HeroContent from "./HeroContent";
import Term from "./Term";

import { useLocation, useHistory } from "react-router-dom";



export default function Terms({ terms }) {
  const location = useLocation();
  const history = useHistory();

  const params = location.state.elem;
  // console.log(params.grade);
  // console.log(params.subject);


  function handleClick(el) {
    // console.log(el);
    // console.log("Hell no")
    // setSub(el)
    const elem = {
      grade: params.grade,
      subject: el,
    };
    history.push({
      pathname: "/topics",
      state: elem
    })
    
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
            {/* <div style={{fontSize: "60px", color: "whiter", backgroundColor: "red", width: "100px", height: "100px", overflow: "scroll"}}>HELLO WORLD</div> */}
          <div>
            <HeroContent grade={params.grade} />
          </div>
          <div className="mainContent-contentterms">
            {terms.map((term, key) => (
              <div>
                <Term key={key} term={term} handleClick={handleClick} />
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
