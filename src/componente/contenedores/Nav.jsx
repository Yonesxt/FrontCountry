import React from "react";
import { Link } from "react-router-dom";
import n from "./css/Nav.module.css"
export default function Nav() {
  return (
    <div >
      <ul className={n.lista}>
        <li className={n.li}>
          <Link to="/"><span>Home</span></Link>
        </li>
        <li className={n.li}>
          <Link to="/Ciudad"><span>Ciudad</span></Link>
        </li>
        <li className={n.li}>
          <Link to="/Actividad"><span>Actividad</span></Link>
        </li>
        <li className={n.li}>
          <Link to="/Actividad/crear"><span>Nueva-Actividad</span></Link>
        </li>
      </ul>
    </div>
  );
}