import { useState } from "react";
import "./navStyle.scss";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          =
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="">Iníco</a>
            </li>
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
