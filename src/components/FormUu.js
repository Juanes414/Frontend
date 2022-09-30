import React from "react";
import ImgFon from "../assets/Rh1.jpg";
import "../styles/Contact.css";

function FormUu() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImgFon})` }}
      ></div>
      <div className="rightSide">
        <h1>Editar un Usuario</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo</label>
          <input name="name" placeholder="Ingrese el nombre completo.." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Ingrese el Email..." type="email" />
          <label htmlFor="name">Contraseña</label>
            <input name="name" placeholder="Ingrese la contraseña que usara" type="password" />
          <button type="submit"> Editar </button>
          <button type="submit"> Eliminar </button>
        </form>
      </div>
    </div>
  );
}

export default FormUu;