import React from "react";
import BannerImage from "../assets/Fondo.png";
import "../styles/Home.css";
import "../styles/Contact.css";
import "../styles/Login.css";
import SelectInput from "@material-ui/core/Select/SelectInput";

function Login() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="form">
        <h1>Iniciar Sesion</h1>
        <form id="contact-form" method="POST">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Ingrese su Email..." type="email" />
            <label htmlFor="name">Contraseña</label>
            <input name="name" placeholder="Contraseña" type="password" />
                <button type="submit"> Ingresar</button>   
        </form>
      </div>
    </div>
  );
}

export default Login;