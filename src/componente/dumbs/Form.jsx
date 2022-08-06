import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addActividad, getCountry } from '../../redux/actions';
import Nav from "../contenedores/Nav"
import s from "./css/Form.module.css"
export function validate(Actividad) {
  let errors = {};
  const UrlRegular = /https:\/\/([/|.\w|\s|-])+\.(?:jpg|png)/g
  if (!Actividad.nombre) {
    errors.nombre = 'Nombre mayor a 3 caracteres';
  }
  if (!Actividad.dificultad) {
    errors.dificultad = 'Seleccióne dificultad';
  }
  if (!Actividad.duracion) {
    errors.duracion = 'Seleccióne duración';
  } else if (Actividad.duracion > 11 || Actividad.duracion < 1) {
    errors.duracion = 'La duracion debe ser mayor a 0 y menor a 10';
  }
  if (!Actividad.temporada) {
    errors.temporada = 'Seleccióne temporada';
  }
  if (!Actividad.image) {
    errors.image = 'Ingrese URL ';
  } else if (!UrlRegular.test(Actividad.image)) {
    errors.image = 'Debe ser una URl valida, Ejemplo: "https://images.emojiterra.com/google/noto-emoji/v2.034/share/1f3c4.jpg"';
  }
  if (!Actividad.ciudad || Actividad.ciudad.length === 0) {
    errors.ciudad = 'Ingrese 1 o mas paises';
  }
  return errors
}
const Form = () => {
  function redirect() {
    window.location.href = "/Ciudad";
  }

  useEffect(() => {
    dispatch(getCountry())
  })
  const state = useSelector((state) => state.country)

  let dispatch = useDispatch();
  const [Actividad, setInput] = React.useState({
    nombre: "",
    dificultad: "",
    duracion: 0,
    temporada: "",
    image: "",
    ciudad: []
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({
      ...Actividad, [e.target.name]: e.target.value
    });
    let objError = validate({ ...Actividad, [e.target.name]: e.target.value });
    setErrors(objError)
  }

  const handleInputCountry = function (e) {
    e.preventDefault();
    if (Object.values(Actividad.ciudad).includes(e.target.value)) {
      alert("Esta marca ya se encuentra en la lista")
    }
    else {
      setInput({
        ...Actividad, ciudad: [...Actividad.ciudad, e.target.value]
      });
      let objError = validate({ ...Actividad, [e.target.name]: e.target.value });
      setErrors(objError)
    }
  }

  const handleDeleteCountry = function (e) {
    if (window.confirm(`¿Quiere eliminar la Ciudad: ${e} de la Lista?`)) {
      setInput({
        ...Actividad,
        ciudad: Actividad.ciudad.filter(k => k !== e)
      })
    }
  }
  const handleSubmit = function (e) {
    e.preventDefault();
    setErrors(validate(setInput))
    if (Object.keys(errors).length === 0 && Actividad.ciudad.length > 0) {
      dispatch(addActividad(Actividad))
      redirect()
    }
    else {
      alert("Rellene todos los campos del formulario")
    }
  }
  return (
    <div>
      <div><Nav /></div>
      <div className={s.container}>
        <div><h1>Crear Actividad</h1></div>
        <form className={s.form} onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              placeholder="Nombre Actividad"
              autoComplete="off"
              onChange={handleInputChange}
              className={s.input}
              value={Actividad.name}
              required="required"
              type="text" name='nombre' />

            {errors.nombre && <p className={s.danger}>{errors.nombre}</p>}
          </div>
          <select
            name='dificultad'
            onChange={handleInputChange}
            className={s.select}
            required>
            <option value="">seleccione dificultad</option>
            <option name="1" value="1">1</option>
            <option name="2" value="2">2</option>
            <option name="3" value="3">3</option>
            <option name="4" value="4">4</option>
            <option name="5" value="5">5</option>
          </select>
          {errors.dificultad && <p className={s.danger}>{errors.dificultad}</p>}

          <input required="required" max="10" min="1" className={s.input} type="number" name='duracion' placeholder='duracion de 1 a 10 horas' value={Actividad.name} onChange={handleInputChange} />
          {errors.duracion && <p className={s.danger}> {errors.duracion}</p>}
          <select required className={s.select} name="temporada" onChange={handleInputChange}>
            <option value="">seleccione temporada</option>
            <option name="Verano" value="Verano">Verano</option>
            <option name="Otoño" value="Otoño">Otoño</option>
            <option name="Invierno" value="Invierno">Invierno</option>
            <option name="Primavera" value="Primavera">Primavera</option>
          </select>
          {errors.temporada && <p className={s.danger}>{errors.temporada}</p>}
          <input pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
            className={s.input}
            autoComplete="off" required="required"
            type="text" name='image'
            placeholder='Url de la imagen'
            input={Actividad.image}
            onChange={handleInputChange}></input>
          {errors.image && <p className={s.danger}>{errors.image}</p>}
          <select required className={s.select} name="ciudad" defaultValue="" onChange={(e) => handleInputCountry(e)}>
            <option value="">Selecionar Pais</option>
            {
              state.map((e, i) =>
                (<option key={i} value={e.nombre}>{e.nombre}</option>))
            }
          </select>
          {errors.ciudad && <p className={s.danger}>{errors.ciudad}</p>}
          <ul className={s.lista}  >
            {Actividad.ciudad.map((d, i) =>
              <div key={i} className={s.inputs}>
                <button className={s.btns} type='button' onClick={() => handleDeleteCountry(d)}>X</button>
                <li >{d}</li>
              </div>
            )}
          </ul>

          <button className={s.btn} type='submit' disabled={Object.keys(errors).length}>Crear Actividad</button>
        </form>
      </div>
    </div>
  );
};

export default Form;