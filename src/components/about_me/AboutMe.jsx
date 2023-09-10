import "./aboutMe.scss";
import avatar from "../../assets/images/avatar.png";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="grid-layout">
        <div className="container-about">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="descriptions">
            <h3>Sobre mim</h3>
            <p>
              Meu nome é Iago Dos Santos Sousa, sou Desenvolvedor Front-End
              apaixonado por tecnologia com habilidades sólidas em HTML, CSS,
              JavaScript, React.js e TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
