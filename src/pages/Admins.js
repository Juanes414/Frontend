import React from "react";
import BannerImage from "../assets/Fondo.png";
import Usuarioim from "../assets/Usuario.png";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Admins.css"


function Admins() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div
        className="imgusuario"
        style={{ backgroundImage: `url(${Usuarioim})` } }
      ></div>
      <div className="ButtonE">
       <Link to="/employeeds">
          <button> Empleados  </button>
        </Link>
      </div>
      <div className="ButtonUs">
       <Link to="/users">
          <button> Usuarios  </button>
        </Link>
      </div>
    </div>
  );
}

export default Admins;
