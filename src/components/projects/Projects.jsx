import "./projects.scss";
import { projectsImages } from "../../utils/projectsImages";

const Projects = () => {
  return (
    <section id="projects">
      <div className="grid-layout">
        <h1 className="project-title">Projetos</h1>
        <div className="projects-container">
          {projectsImages.map((element, index) => (
            <div className="card" key={index}>
              <img src={element.image} alt="" />
              <div className="info">
                <h1>{element.h1}</h1>
                <p>{element.p}</p>
                <a href={element.a} target="_blank">
                  <button>Veja</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
