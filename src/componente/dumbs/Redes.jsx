import React from "react";
import linkedin from "../../img/Linkedin.png"
import github from "../../img/GitHub.png"
import r from "./css/Redes.module.css"
export default function Redes() {
  // logica no, porque es un comp dumb

  return (
    <div className={r.div}>
      <div>
        <a href="https://www.linkedin.com/in/rodrigo-perez-yones/" target="_blank" rel="noreferrer"><img className={r.img} src={linkedin} alt='Linkedin' /></a>

        <a href="https://github.com/Yonesxt" target="_blank" rel="noreferrer"><img className={r.img} src={github} alt='Github' /></a>
      </div>
    </div>
  );
}