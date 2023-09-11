import { useState } from "react";
import "./navStyle.scss";
import logo from "../../assets/images/logo.svg";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <span>Iago</span>
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={() => handleShowNavbar()}>
          =
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#start" onClick={() => handleShowNavbar()}>
                Iníco
              </a>
            </li>
            <li>
              <a href="#about-me" onClick={() => handleShowNavbar()}>
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleShowNavbar()}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => handleShowNavbar()}>
                Habilidades
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
