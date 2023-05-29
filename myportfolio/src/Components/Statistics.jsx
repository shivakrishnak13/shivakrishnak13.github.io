import React, { useState } from "react";
import ReactGithubCalendar from "react-github-calendar";
import "../Styles/statistics.css";


const Statistics = () => {

  const [username, _] = useState("shivakrishnak13");
  const startDate = new Date("2022-11-29");
      
  return (
    <div className="stats">
     <div className="github-calender-div">
     <h2>GitHub Contributions</h2>
     <div className="calendar-container">
        <ReactGithubCalendar
          username={username}
          style={{ width: "1000px", margin:"auto" }}
          classForValue={(value) => `contribution-level-${value.count}`}
          startDate={startDate}
        />
      </div>
     </div>
    </div>
  )
}

export default Statistics;