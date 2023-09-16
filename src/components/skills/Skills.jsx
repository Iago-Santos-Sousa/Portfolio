import { useState } from "react";
import "./skills.scss";
import { skillsImages } from "../../utils/skillsImages";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="skills">
      <div className="grid-layout">
        <div className="skills-container">
          <article className="skills-text">
            <h2>Habilidades...</h2>
            <p>
              {hoveredIndex !== null
                ? skillsImages.map(
                    (e, index) => hoveredIndex === index && e.description,
                  )
                : "*passe o cursor do mouse no card para ler*"}
            </p>
          </article>
          <div className="skills-cards-container">
            {skillsImages.map((e, index) => (
              <div
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
                className={`${e.className} skill`}
              >
                <img
                  src={hoveredIndex === index ? e.srcHover : e.src}
                  width="60px"
                  height="60px"
                  alt={`${hoveredIndex === index ? e.className : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
