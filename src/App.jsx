import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./assets/questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Nav from "./components/Nav";



function App() {

  return (
    <div>
     <Nav/>
     <QuestionBox/>
    </div>
  );
}

export default App;