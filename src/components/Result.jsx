import React from "react";
import "./css/result.css";

const Result = ({ correctAnswers, totalQuestions }) => {
  // calculating percentage
  const percentage = (correctAnswers / totalQuestions) * 100;

  // getComment will give comment according to the percentage obtained
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
    <div className="mainContainer">
      <div className="resultContainer">
        <h1>Quiz Result</h1>
        <p>Number of correct answers: {correctAnswers}</p>
        <p>Total Questions: {totalQuestions}</p>
        <p id="comment">{comment}</p>
        <p id="percent">{percentage}%</p>
      </div>
    </div>
  );
};

export default Result;
