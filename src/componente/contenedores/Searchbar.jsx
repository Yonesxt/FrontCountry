import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterContinent, Order, GetName, filterActivity } from '../../redux/actions';
import s from "./css/Searchbar.module.css"


export default function Searchbar({paginate}) {
  const [name, setname] = useState('')
  const ActivitiesStatus = useSelector(state => state.actividad)
  const dispatch = useDispatch()

  function handleChange(e) {
    setname(e.target.value)
  }
  function handlesubmit(e) {
    e.preventDefault()
    dispatch(GetName(name))
  }
  function handleFilterContinent(e) {
    dispatch(filterContinent(e.target.value))
    paginate(1)
  }
  function handleOrder(e) {
    dispatch(Order(e.target.value))
    paginate(1)
  }
  function handleFilterActivity(e) {
    dispatch(filterActivity(e.target.value))
    paginate(1)
  }
  return (
    <div>
      <div className={s.divselec}>
        <div className={s.divselec1}>
          <select className={s.select} defaultValue="Filtrar Pais por Continente" onChange={e => handleFilterContinent(e)}>
            <option disabled >Filtrar Pais por Continente</option>
            <option value="All">All continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
          <div >
          </div>
          {
            !ActivitiesStatus.length ?
              <select className={s.select} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>No hay Actividades</option>
              </select>
              :
              <select className={s.select} defaultValue={'DEFAULT'} onChange={e => handleFilterActivity(e)}>
                <option value="DEFAULT" disabled >Filtrar Pais por Actividades</option>
                <option value='All'>All</option>
                {ActivitiesStatus.map(e =>
                  <option key={e.id} value={e.nombre}>
                    {e.nombre}
                  </option>
                )}
              </select>
          }
        </div>
        <div className={s.divselec2} >
          <input className={s.buscar} autoComplete="off" onChange={e => handleChange(e)} placeholder='Buscar por Pais' ></input>
          <button className={s.btn} onClick={(e) => handlesubmit(e)} type='submit'>Buscar</button>
        </div>
      </div>
      <div>
        <div >
          <select className={s.select} defaultValue="Ordenar por" onChange={e => handleOrder(e)}>
            <option disabled>Ordenar por</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="Menor">Poblacion:Menor a Mayor</option>
            <option value="Mayor">Poblacion:Mayor a Menor</option>
          </select>
        </div>
      </div>
    </div>
  )
}



