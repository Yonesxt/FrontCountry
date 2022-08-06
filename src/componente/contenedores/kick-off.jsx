import React from 'react'
import { Link } from 'react-router-dom'
import Redes from '../dumbs/Redes'
import s from './css/Kick-off.module.css'
function kickOff() {
  return (
    <div className={s.fondo}>
      <div></div>
      <Link to="/Ciudad">
        <button className={s.btn} >Inicio</button>
      </Link>
      <div >
        <Redes className={s.red} />
      </div>
    </div>
  )
}
export default kickOff