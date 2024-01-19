import React, { useState } from "react";
import "./css/box.css";
import questions from "../assets/questions.js";
import Result from "./Result.jsx"
import Nav from "./Nav.jsx";
export default function QuestionBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const current = questions[currentIndex];
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // handleHighligt and HandleRemoveHighlight are two functions that will be called onclick of respective buttons
  const handleHighlight = () => {
    setHighlight(true);
  };
  const handleRemoveHighlight = () => {
    setHighlight(false);
  };
  // handleClick function will change the question and options whenever an option is clicked
  const handleClick = (isCorrect) => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next === 5) {
        setShowResult(true);
      }
      // Update correct answers if the selected option is correct
      if (isCorrect) {
        setCorrectAnswers((prevCorrect) => prevCorrect + 1);
      }
      return next;
    });

};

  return (
    
    // creating a div that will contain question and options
    <div className="container flex" id="boxContainer">
      {showResult ? (
        // Render Result component when showResult is true
        <Result correctAnswers={correctAnswers} totalQuestions={5}/>
      ) : (
      <div id="ques" className={`queBox flex ${highlight ? "highlighted" : ""} darkMode`}>
        {/* this div will display the current question number */}

        <div className="num">
          <h4 className="queNum flex">{`${currentIndex + 1}/${
            questions.length
          }`}</h4>
        </div>
        {/* it will display the question */}

        <div className={`queText flex ${highlight ? "highlightedText" : ""}`}>
          {current.text}
        </div>
        {/* this block will display the options using map higher order function */}

        <div className="options flex">
          {current.options.map((option) => (
            <button key={option.id} className="optionBtn" onClick={() => handleClick(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </div>
        {/* highlight buttons are created here to highligt the question */}
        <div className="highlight" id="highBtns">
          <button className="highBtn darkMode" id="high" onClick={handleHighlight}>
            HIGHLIGHT
          </button>
          <button className="highBtn darkMode" id="rem" onClick={handleRemoveHighlight}>
            REMOVE HIGHLIGHT
          </button>
        </div>
      </div>
      )}
      </div>
    );
  }
