import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import "./startStyle.scss";

const Start = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="start">
      <div className="grid-layout">
        <div className="start-home">
          <div
            className={`start-text-container ${
              theme === "dark-theme" && "dark-color"
            }`}
          >
            <h4>Oi, eu sou</h4>
            <h2>Iago Dos Santos Sousa</h2>
            <h3>
              Desenvolvedor Front-End
              <span className="cursor-blink">|</span>
            </h3>
            <a
              href="https://www.linkedin.com/in/iagosantossousa/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
