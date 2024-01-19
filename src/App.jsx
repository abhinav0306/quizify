import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Nav from "./components/Nav";
import Result from "./components/Result"

function App() {

  return (
    <div>
      {/* calling the respective component to display it  */}
    <Nav/>
     <QuestionBox/> 
     {/* <Result/> */}
    </div>
  );
}

export default App;