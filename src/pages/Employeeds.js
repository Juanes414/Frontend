import React from "react";
import BannerImage from "../assets/Fondo.png";
import Usuarioim from "../assets/Usuario.png";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Employeeds.css";



function Employeeds() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div
      className="imgusuario"
      style={{ backgroundImage: `url(${Usuarioim})` } }
    ></div>
    <div className="ButtonC">
     <Link to="/create">
        <button> Registrar  </button>
      </Link>
    </div>
    <div className="ButtonU">
     <Link to="/update">
        <button> Editar </button>
      </Link>
    </div>
    <div className="ButtonR">
     <Link to="/read">
        <button> Visualizar  </button>
      </Link>
    </div>
  </div>
  );
}

export default Employeeds;
