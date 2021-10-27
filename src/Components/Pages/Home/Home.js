import * as React from "react";
import Header from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import HomeSearch from "../../Layouts/Main/HomeHero/HomeSearch";
// import HomeItem from "../../Layouts/Main/HomeContent/HomeItem";

import Lesson from "../Lessons/Lesson";

export default function GridTemplateAreas({texts, db, searchGrade}) {

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
          <div>
            <HomeSearch searchGrade={searchGrade} />
          </div>
          <div className="mainContent-content">
            {/* {db.map((text) => (
              <HomeItem key={text.classid} text={text.classid} />
            ))} */}
            {db.map((item, key) => (
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
