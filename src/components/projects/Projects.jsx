import "./projects.scss";
import todoList from "../../assets/images/to_do_list.svg";
import calculator from "../../assets/images/calculator.svg";
import weather from "../../assets/images/weather.svg";
import githubProfile from "../../assets/images/github-profile.svg";
import quiz from "../../assets/images/quiz.svg";
import stopWatch from "../../assets/images/stop-watch.svg";
import timer from "../../assets/images/timer.svg";
import ageCalculator from "../../assets/images/age.svg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="grid-layout">
        <h1 className="project-title">Projetos</h1>
        <div className="projects-container">
          <div className="card">
            <img src={todoList} alt="" />
            <div className="info">
              <h1>To do List</h1>
              <p>To do List simulando um CRUD com React.js</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={calculator} alt="" />
            <div className="info">
              <h1>Calculadora</h1>
              <p>Calculadora do windows feita com React.js</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={weather} alt="" />
            <div className="info">
              <h1>Weather-App</h1>
              <p>
                App de consultaro clima contruído com React.js, TypeScript e
                TailwindCSS.
              </p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={githubProfile} alt="" />
            <div className="info">
              <h1>GitHub Profile</h1>
              <p>
                Projeto com Reactjs e TypeScript para achar sua conta do GitHub.
              </p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={quiz} alt="" />
            <div className="info">
              <h1>Quiz JavaScript</h1>
              <p>Quiz com perguntas sobre JavaScript feito com React.js.</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={stopWatch} alt="" />
            <div className="info">
              <h1>Stop Watch</h1>
              <p>Cronômetro feito com React.js.</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={timer} alt="" />
            <div className="info">
              <h1>Timer</h1>
              <p>Temporizador feito com React.js.</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="card">
            <img src={ageCalculator} alt="" />
            <div className="info">
              <h1>Age Calculator</h1>
              <p>Calculadora de idade com React.js.</p>
              <button>Veja</button>
            </div>
          </div>

          <div className="continue">
            <span>...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
