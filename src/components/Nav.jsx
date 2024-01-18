import React from 'react';
import "./css/nav.css"
export default function Nav() {
  return (
    <div className="navbar">

      {/* logo */}
      <div className="logo">
      <img src="https://github.com/abhinav0306/quizify/blob/main/src/assets/purple.png?raw=true" alt="" />
      </div>
      {/* dark/light mode toggle button */}
      <div className="modebtn">
      <button>DARK</button>
      </div>
    </div>
  );
}
