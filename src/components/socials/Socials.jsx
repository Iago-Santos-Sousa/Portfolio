import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import "./socials-style.scss";
import instagram from "../../assets/images/instagram.svg";
import instagramLight from "../../assets/images/instagram-light.svg";
import linkedin from "../../assets/images/linkedin.svg";
import linkedinLight from "../../assets/images/linkedin-light.svg";
import twitter from "../../assets/images/twitter.svg";
import twitterLight from "../../assets/images/twitter-light.svg";
import youtube from "../../assets/images/youtube.svg";
import youtubeLight from "../../assets/images/youtube-light.svg";
import githubSocial from "../../assets/images/github-social.svg";

const Socials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <span className="background">
      <span className="social-media-buttons">
        <a
          href="https://www.instagram.com/iago4496/"
          className={`social-media-button ${
            theme === "light-theme" ? "outline-light" : "outline-dark"
          }`}
          target="_blank"
        >
          <span>
            <img alt="Instagram" src={instagram} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/iagosantossousa/"
          className={`social-media-button ${
            theme === "light-theme" ? "outline-light" : "outline-dark"
          }`}
          target="_blank"
        >
          <span>
            <img alt="LinkedIn" src={linkedin} />
          </span>
        </a>
        <a
          href="https://github.com/Iago-Santos-Sousa"
          className={`social-media-button ${
            theme === "light-theme" ? "outline-light" : "outline-dark"
          }`}
          target="_blank"
        >
          <span>
            <img alt="GitHub" src={githubSocial} />
          </span>
        </a>
      </span>
    </span>
  );
};

export default Socials;
