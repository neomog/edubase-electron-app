import * as React from "react";
import Header from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
// import HomeSearch from "../../Layouts/Main/HomeHero/HomeSearch";
import Lesson from "./Lesson";



export default function GridTemplateAreas({texts, db, dd}) {


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
          {/* <div>
            <HomeSearch />
          </div> */}
          <div className="mainContent-content">
            {dd.map((item, key) => (
              <div>
                <Lesson key={key} item={item}  />
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
