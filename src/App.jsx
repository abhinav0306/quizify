import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Nav from "./components/Nav";

function App() {

  return (
    <div>
      {/* calling the respective component to display it  */}
    <Nav/>
     <QuestionBox/> 
     {/* credits */}
     <h3 className="credits">Made with 💖 by Abhinav</h3>
    </div>
  );
}

export default App;