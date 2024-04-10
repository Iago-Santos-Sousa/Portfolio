import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import "./aboutMe.scss";
import avatar from "../../assets/images/avatar.png";
import Socials from "../socials/Socials";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about-me"
      className={`${
        theme === "light-theme" ? "border-light-theme" : "border-dark-theme"
      }`}
    >
      <div className="grid-layout">
        <div className="container-about">
          <div className="avatar">
            <img src={avatar} alt="avatar" loading="lazy" />
          </div>
          <div className="descriptions">
            <h3>Sobre mim</h3>
            <p>
              Meu nome é Iago Dos Santos Sousa, apaixonado por tecnologia, sou
              desenvolvedor web especializado em JavaScript, React.js,
              TypeScript, Node.js e SQL.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
