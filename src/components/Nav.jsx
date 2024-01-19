import React from "react";
import "./css/nav.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function Nav() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <div className="navbar">
      {/* logo */}
      <div className="logo">
        <img
          src="https://github.com/abhinav0306/quizify/blob/main/src/assets/purple.png?raw=true"
          alt=""
        />
      </div>
      {/* dark/light mode toggle button */}
      <div className="modebtn">
      <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      moonColor="black"
      // sunColor="white"
    />
      </div>
    </div>
  );
}
