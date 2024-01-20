import React from "react";
import "./css/result.css";

const Result = ({ correctAnswers, totalQuestions }) => {
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

  return (
    // this will return a result box which will contain all the details
    <div className="mainContainer">
      <div className="resultContainer">
        <div className="content" id="content">
        <h1 >Quiz Result</h1>
        <p>Number of correct answers: {correctAnswers}</p>
        <p>Total Questions: {totalQuestions}</p></div>
        <p id="comment">{comment}</p>
        <p id="percent">{percentage}%</p>
      </div>
      <div className="restartBtn">
        <button className="resBtn ">Restart</button>
      </div>
    </div>
  );
};

export default Result;
