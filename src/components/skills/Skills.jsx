import "./skills.scss";
import html from "../../assets/images/html-hover.svg";

const Skills = () => {
  return (
    <section id="skills">
      <div className="grid-layout">
        <div className="skills-container">
          <article className="skills-text">
            <h2>
              Habilidades <span>.</span>
            </h2>
            <p>*passe o cursor do mouse no card para ler*</p>
          </article>
          <div className="skills-cards">
            <div className="html skill">
              <img src={html} width="60px" height="60px" alt="HTML" />
            </div>
            <div className="css skill">
              <img src="" width="60px" height="60px" alt="CSS" />
            </div>
            <div className="bootstrap skill">
              <img src="" width="60px" height="60px" alt="bootstrap" />
            </div>
            <div className="tailwind skill">
              <img src="" width="60px" height="60px" alt="tailwind CSS" />
            </div>
            <div className="sass skill">
              <img src="" width="60px" height="60px" alt="SASS" />
            </div>
            <div className="java-script skill">
              <img src="" width="60px" height="60px" alt="JavaScript" />
            </div>
            <div className="type-script skill">
              <img src="" width="60px" height="60px" alt="TypeScript" />
            </div>
            <div className="react skill">
              <img src="" width="60px" height="60px" alt="React.js" />
            </div>
            <div className="git skill">
              <img src="" width="60px" height="60px" alt="Git" />
            </div>
            <div className="git-hub skill">
              <img src="" width="60px" height="60px" alt="GitHub" />
            </div>
            <div className="npm skill">
              <img src="" width="60px" height="60px" alt="NPM" />
            </div>
            <div className="sql skill">
              <img src="" width="60px" height="60px" alt="SQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
