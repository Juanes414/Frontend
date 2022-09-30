import React from "react";
import BannerImage from "../assets/Fondo.png";
import Usuarioim from "../assets/Usuario.png";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Users.css"



function Users() {
  return (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div
      className="imgusuario"
      style={{ backgroundImage: `url(${Usuarioim})` } }
    ></div>
    <div className="ButtonC">
     <Link to="/createu">
        <button> Registrar  </button>
      </Link>
    </div>
    <div className="ButtonU">
     <Link to="/updateu">
        <button> Editar </button>
      </Link>
    </div>
    <div className="ButtonR">
     <Link to="/readu">
        <button> Visualizar  </button>
      </Link>
    </div>
  </div>
  );
}

export default Users;
