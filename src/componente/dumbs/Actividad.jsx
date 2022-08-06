import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActividad, removeActividad } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Nav from '../contenedores/Nav'
import s from './css/Actividad.module.css'
export default function Actividad() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.actividad);
  function redirect() {
    window.location.href = "/Ciudad";
  }

  useEffect(() => {
    dispatch(getActividad())
  }, [dispatch])
  function handleDelete(e) {
    if (window.confirm(`¿Quiere eliminar la Actividad: de la Lista?`)) {
      alert("Actividad Eliminada")
      dispatch(removeActividad(e))
      redirect()
    }
  }
  return (
    <div>
      <Nav />
      {state.length > 0 ?
        state.map((e) =>
        <div key={e.id} className={s.contenedoractividad}>
          <div className={s.contenedor}  id={e.id}>
                <button className={s.btn} onClick={() => handleDelete(e.id)}>X</button>
            <div className={s.actividad}>
              <div className={s.actividad1}>
                <h1>Actividad: {e.nombre}</h1>
                <div>
                  <h2>Duracion: {e.duracion}Hs</h2>
                  <h2>Estacion: {e.temporada}</h2>
                  <h2>Dificultad: {e.dificultad}</h2>
                  <img className={s.imagactividad} src={e.image} alt="imagen de detalle"  />
                </div>
                </div>
                <div>
                  <h1>Realizada en: </h1>
                  <div className={s.imgciudad}>
                  {e.countries?.map(e =>
                    <div key={e.id}>
                      <div><h3>{e.nombre}</h3></div>
                      <img src={e.imagBandera} alt="imagen de detalle" width="250px" height="250px" />
                    </div>
                  )}
                  </div>
                </div>
              </div>
              </div>
          </div>)
        :
        <div className={s.crear} >
          <h3>
            No hay actividades en este momento:
          </h3>
          <h4>¿desea crear una?</h4>
          <Link to="/Actividad/crear">
            <button className={s.btn}>
              Crear nueva actividad
            </button>
          </Link>
        </div>
      }
    </div>
  )
}