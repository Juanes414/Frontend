import React from "react";
import Planpp from "../assets/desarrollo-personal.png";
import Pasos from "../assets/Pasos.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <br></br>
      <br></br>
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Planpp})` } }
      ></div>
      <br></br><br></br><br></br>
      <div className="aboutBottom">
        <h1> ¿Que es? </h1><p>
        Un plan de desarrollo profesional es un documento dinámico que evalúa tus habilidades actuales, 
        te ayuda a establecer los objetivos de tu carrera, 
        desarrollar estrategias y encontrar recursos que te ayudarán a alcanzar tus metas. 
        En este artículo, analizaremos algunos ejemplos de planes y objetivos de desarrollo profesional. 
        También te mostraremos algunas herramientas que te ayudarán a dar seguimiento a tu progreso.
        <br></br><br></br>
        La imagen a continuación, ilustra el ciclo de vida de tu plan de desarrollo profesional.
        </p>
          <div
            className="ImagPass"
            style={{ backgroundImage: `url(${Pasos})` }}
          ></div>
      </div>
    </div> 
  );
}

export default About;
