import React from "react";
import HeroBlob from "../FrontendAssets/Vector.png";
import HeroImage from "../FrontendAssets/HeroImage.png";
import HeroImage2 from "../FrontendAssets/HeroImage2.png";
import ReactSwitch from "react-switch";

const Hero = ({ theme, themeToggle }) => {
  return (
    <main className="hero">
      <div className="hero_left">
        <article className="hero_article">
          <h1>Buy and Sell Bonds Quickly</h1>
          <p>We bring to you quality service.</p>
          <div className="hero_article_actions">
            <button>
              <span>Get Started</span>
              <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
            </button>
            <button>
              <i className="far fa-play-circle"></i>
              <span>See Video</span>
            </button>
          </div>
        </article>
      </div>
      {theme === "light" ? (
        <div className="hero_right">
          <img className="blob" src={HeroBlob} alt="blob-img" />
          <img className="hero_image" src={HeroImage} alt="" />
        </div>
      ) : (
        <div className="hero_right2">
          <img className="hero_image2" src={HeroImage2} alt="hero_img" />
        </div>
      )}

      <div className="theme_switch">
        <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
        <label htmlFor="theme_switch">Light/Dark</label>
        <ReactSwitch
          id="theme_switch"
          onChange={themeToggle}
          checked={theme === "dark"}
        />
      </div>
    </main>
  );
};

export default Hero;
