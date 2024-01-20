import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import "./css/result.css";

const Result = ({ correctAnswers, totalQuestions, onRestart }) => {
  // using hook to change state of restart button 
  const [restart, setRestart] = useState(false);

  const percentage = (correctAnswers / totalQuestions) * 100;

  // getComment function will give comment according to the percentage obtained
  const getComment = () => (
    percentage === 100
      ? "Excellent! You nailed it!"
      : percentage === 80
      ? "Great job! Well done!"
      : percentage === 60
      ? "Good effort! Keep it up!"
      : percentage === 40
      ? "Not bad! You're on the right track."
      : "Sorry, you need to study more."
  );

  const comment = getComment();
  // handleRestart function will set all the values to default from the questionBox component.
  const handleRestart = () => {
    onRestart();
    setRestart(true);
  };

  return (
    <div className="mainContainer">
      {/* making restart button functional */}
      {restart ? (
        <QuestionBox restart={restart} setRestart={setRestart} />
      ) : (
        <div className="resultContainer">
          <div className="content" id="content">
            <h1>Quiz Result</h1>
            <p>Number of correct answers: {correctAnswers}</p>
            <p>Total Questions: {totalQuestions}</p>
          </div>
          <p id="comment">{comment}</p>
          <p id="percent">{percentage}%</p>
        </div>
      )}
      <div className="restartBtn">
        <button className="resBtn" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Result;
