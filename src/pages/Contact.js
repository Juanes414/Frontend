import React from "react";
import ImgFon from "../assets/Rh1.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImgFon})` }}
      ></div>
      <div className="rightSide">
        <h1>Solicita tu PLanPP</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo</label>
          <input name="name" placeholder="Ingrese su nombre completo.." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Ingrese su Email..." type="email" />
          <label htmlFor="message">Especificaciones</label>
          <textarea
            rows="6"
            placeholder="Ingrese sus especificaciones..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
