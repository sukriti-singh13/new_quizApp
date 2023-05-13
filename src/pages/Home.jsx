import React from "react";
import Hero from "../assets/Done.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main_container home_parent">
      <div className="upper_content">
        <h1> React Quiz</h1>
        <img src={Hero} alt="hero" />
      </div>
      <div className="home_content">
        <div className="wrapper_center">
          <div className="intro">
            <h3>React Quiz</h3>
            <p>
              This section includes eight advanced behavioral React.js interview
              questions you can ask to find out which methods your candidates
              use when working on React.js projects.
            </p>
          </div>
          <div className="about_exam">
            <h3>Quiz contains</h3>
            <li> 5 questions</li>
            <li> 1 minute</li>
            <li> Intermediate level </li>
          </div>
          <button onClick={() => navigate("/quiz")}>Take Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
