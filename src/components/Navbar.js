import React, { useState } from "react";
import Logo from "../assets/LogoSFO.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Inicio </Link>
          <Link to="/Planpp"> Plan PP  </Link>
          <Link to="/contact"> Contacto </Link>
          <Link to="/Login"> Iniciar Sesion </Link>
        </div>
      </div>
      <div className="rightSide">
          <Link to="/"> Inicio </Link>
          <Link to="/about"> Plan PP  </Link>
          <Link to="/contact"> Contacto </Link>
          <Link to="/Login"> Iniciar Sesion </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
