import "./footerStyle.scss";
import githubFooter from "../../assets/images/github-footer.svg";
import linkedinFooter from "../../assets/images/linkedin-footer.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="grid-layout">
        <div className="footer-container">
          <div className="footer-informations">
            <span>E-mail: iago.santos.sousa@gmail</span>
            <span>Copyright © 2023 Iago</span>
          </div>
          <div className="footer-icons">
            <div className="icon github">
              <a href="https://github.com/Iago-Santos-Sousa" target="_blank">
                <img src={githubFooter} alt="github" />
              </a>
            </div>
            <div className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/iagosantossousa/"
                target="_blank"
              >
                <img src={linkedinFooter} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
