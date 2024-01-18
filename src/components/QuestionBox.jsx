import React, { useState } from "react";
import "./css/box.css";
import questions from "../assets/questions.js";
export default function QuestionBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = questions[currentIndex];

  return (
    // creating a div that will contain question and options
    <div className="container flex">
      <div className="queBox flex">
        {/* this div will display the current question number */}
        <div className="num">
          <h4 className="queNum flex">{`${currentIndex + 1}/${
            questions.length
          }`}</h4>
        </div>
        {/* it will display the question */}
        <div className="queText flex">{current.text}</div>
        {/* this block will display the options using map higher order function */}
        <div className="options flex">
          {current.options.map((option) => (
            <button key={option.id} className="optionBtn">
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
