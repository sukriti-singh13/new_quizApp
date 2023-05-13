import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "../components/Time";
const Quiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [completedTime, setCompletedTime] = useState("");
  const quizData = [
    {
      question: "What is the functionality of a “webpack” command?",
      ans: [
        "Runs React local development server",
        "A module blunder",
        "Transfer files",
        "None of the above",
      ],
      correctANs: "Runs React local development server",
    },
    {
      question: "In react, the key should be?",
      ans: [
        "Unique with parent",
        "Does not require to be Unique",
        "Unique in the Dom",
        "Unique among its siblings only",
      ],
      correctANs: "Unique among its siblings only",
    },
    {
      question: "React is a ___________",
      ans: [
        "Javascript Framework",
        "Javascript Library",
        "Both of the above",
        "None of the above",
      ],
      correctANs: "Javascript Library",
    },
    {
      question: "What is used to handle code-splitting?",
      ans: ["React.lazy", "React.memo", "React.fallback", "None of the above"],
      correctANs: "React.lazy",
    },

    {
      question:
        "Which of the following terms commonly described react applications?",
      ans: ["Imperative", "Integrated", "Declarative", "Closed"],
      correctANs: "Declarative",
    },
  ];

  const onNext = () => {
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/done");
      localStorage.setItem("time", completedTime);
      localStorage.setItem(
        "score",
        JSON.stringify(correctAns) + ` /${quizData.length} `
      );
    }
  };

  const handleTimeUpdate = (time, completedTimeCandidate) => {
    setCompletedTime(completedTimeCandidate);
    setCurrentTime(time);
  };

  useEffect(() => {
    if (selectedOption === quizData[currentIndex].correctANs) {
      setCorrectAns((prev) => prev + 1);
    }
  }, [selectedOption]);
  useEffect(() => {
    if (currentTime === "00:00") {
      navigate("/done");
      localStorage.setItem("time", completedTime);
      localStorage.setItem(
        "score",
        JSON.stringify(correctAns) + ` /${quizData.length} `
      );
    }
  }, [currentTime]);

  return (
    <div className="main_container parent_quiz">
      <nav>
        <div className="question_nav">
          {currentIndex + 1 + "/" + quizData.length}
        </div>
        <div className="time">
          <Time onTimeUpdate={handleTimeUpdate} />
        </div>
      </nav>
      <div className="quest_ans_wrapper">
        <h2>
          Q{currentIndex + 1} .{quizData[currentIndex].question}
        </h2>

        <div className="answers">
          {quizData[currentIndex].ans.map((ans, index) => (
            <div className="content" key={index}>
              <input
                type="radio"
                name="ans"
                value={ans}
                checked={selectedOption === ans}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {ans}
            </div>
          ))}
        </div>

        <button onClick={onNext}>
          {currentIndex + 1 === quizData.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
