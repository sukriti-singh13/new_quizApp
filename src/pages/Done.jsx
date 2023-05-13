import React from "react";
import DoneImg from "../assets/Done.svg";
const Done = () => {
  let time = localStorage.getItem("time");
  let score = localStorage.getItem("score");
  return (
    <div className="main_container done_container">
      <h1>Completed</h1>
      <img src={DoneImg} alt="done" />
      <div className="completed_quiz_info">
        <h4>Your Score</h4>
        <div className="score">{score}</div>
      </div>
      <div className="completed_quiz_info">
        <h4>Time Taken</h4>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default Done;
