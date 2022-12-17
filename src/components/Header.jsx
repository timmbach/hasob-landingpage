import React from "react";
// import ThemeContext from "../App";

const Header = () => {
  // const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <a href="/">
            H<span>ASO</span>B
          </a>
        </div>
      </div>
      <div className="header_right">
        <div className="nav">
          <ul>
            <li>Why us</li>
            <li>Features</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
