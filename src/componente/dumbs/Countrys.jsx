import React from "react";
import Country from "./Country";
import c from "./css/Countrys.module.css"
export default function Countrys(props) {


  while (!props.country.length) {
    return(
      <div className={c.container} >
        <div className={c.spinner}  />
      </div>
    ) 
  }
  return (
    <div className={c.container} >

        <div className={c.cards}>
        {props.country.map((element) => (

          <div key={element.id}>
            <Country
              nombre={element.nombre}
              continente={element.continente}
              poblacion={element.poblacion}
              imagBandera={element.imagBandera}
              id={element.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}