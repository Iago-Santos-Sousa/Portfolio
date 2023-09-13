import "./startStyle.scss";

const Start = () => {
  return (
    <section id="start">
      <div className="grid-layout">
        <div className="start-home">
          <div className="start-text-container">
            <h3>Oi, eu sou</h3>
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
