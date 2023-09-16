import { useState, useContext } from "react";
import "./navStyle.scss";
import logo from "../../assets/images/logo.svg";
import MenuBurguer from "../menu_hamburguer/MenuBurguer";
import ToogleTheme from "../toogle_theme/ToogleTheme";
import { ThemeContext } from "../../Theme";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav
      id="navbar"
      className={`${
        theme === "light-theme" ? "border-light-theme" : "border-dark-theme"
      }`}
    >
      <div className="container">
        <a href="/Portfolio">
          <div className="logo">
            <span>Iago</span>
            <img src={logo} alt="logo" />
          </div>
        </a>
        <ToogleTheme />
        <div className="menu-icon" onClick={() => handleShowNavbar()}>
          <MenuBurguer showNavbar={showNavbar} />
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
