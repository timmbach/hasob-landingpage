import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="main" id={theme}>
      <Header />
      <div className="empty_div">
        <div
          style={{
            backgroundColor: "#A572EF",
            opacity: "0.7",
            height: "30px",
            width: "70px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#D88552",
            opacity: "0.7",
            height: "30px",
            width: "70px",
          }}
        ></div>
      </div>
      <Hero theme={theme} themeToggle={themeToggle} />
    </div>
  );
};

export default App;
