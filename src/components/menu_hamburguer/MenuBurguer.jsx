import hamburguer from "./hamburguer.scss";
const MenuBurguer = ({ showNavbar }) => {
  return (
    <button className={`${showNavbar && "active-menu"}`} id="btn-menu">
      <span className="linha"></span>
      <span className="linha"></span>
      <span className="linha"></span>
    </button>
  );
};

export default MenuBurguer;
