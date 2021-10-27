
import { useLocation, useHistory } from "react-router-dom";
import Header from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import HeroContent from "./HeroContent";
import Subject from "./Subject";



export default function Subjects({texts, db}) {
  const location = useLocation();
  const history = useHistory();
  const state = location.state;

  const gradeUse = state.classid;
  const subjects = state.subjects

  // /////////////FUNCTION TO GOTO TERM COMPONENT WITH DETAILS
  function handleClick(el) {

    const elem = {
      grade: state.classid,
      subject: el,
    };
    history.push({
      pathname: "/terms",
      state: {elem}
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
          <div>
            <HeroContent grade={gradeUse} />
          </div>
        <div className="mainContent-content">
        {subjects.map((subject, key) => (      
                <Subject key={key} subject={subject} handleClick={handleClick} />
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}
