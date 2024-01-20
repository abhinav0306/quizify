import React, { useEffect } from "react";
import "./css/nav.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Nav() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  // using useEffect hook to toggle modes and changing colors 
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    document.querySelectorAll('.darkMode').forEach((element) => {
      element.style.color = isDarkMode ? 'white' : 'black';
      element.style.border = isDarkMode ? '2px solid #7f00ff' : '';
    });
  }, [isDarkMode]);

  return (
    <div className="navbar">
      {/* logo */}
      <div className="logo">
        <img
          src="https://github.com/abhinav0306/quizify/blob/main/src/assets/logo.png?raw=true"
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
          moonColor="white"
          sunColor="black"
        />
      </div>
    </div>
  );
}
