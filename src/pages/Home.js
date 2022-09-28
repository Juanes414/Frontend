import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Fondo.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> SoftwareOne </h1>
        <br></br>
        <p> PLAN DE DESARROLLO PERSONAL Y CRECIMIENTO </p>
        <Link to="/Login">
          <button> INICIAR SESION </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;