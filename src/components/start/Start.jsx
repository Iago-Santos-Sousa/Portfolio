import "./startStyle.scss";
import code from "../../assets/images/code.svg";

const Start = () => {
  return (
    <section id="start">
      <div className="grid-layout">
        <div className="start-home">
          <div className="start-text-container">
            <h3>Oi, eu sou</h3>
            <h2>Iago Dos Santos Sousa</h2>
            <h3>Desenvolvedor Front-End</h3>
            <a href="">Linkedin</a>
          </div>
          {/* <div className="start-img">
            <img src={code} alt="imagem" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Start;
