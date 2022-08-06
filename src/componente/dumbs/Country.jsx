import React from "react";
import { Link } from "react-router-dom";
import c from "./css/Country.module.css"
export default function Country(props) {
  // logica no, porque es un comp dumb

  return (
    <div className={c.card}>
      <div>
        <h3> {props.nombre} </h3>
        <h3> {props.continente} </h3>
        <h3> {props.poblacion} </h3>
      </div>
      <div className={c.container}>
        <Link to={`/Ciudad/${props.id}`}>
          <img className={c.image} src={props.imagBandera} alt="Imagen de personaje" />
          <div className={c.overlay}>
            <div className={c.text}>Mas información</div>
          </div>
        </Link>
      </div>
    </div>
  );
}