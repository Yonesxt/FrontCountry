import React from 'react'
import Nav from "./Nav"
import Error from "./Error"
import { Link } from 'react-router-dom'
import s from './css/Detail.module.css'



class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: {},
    };
    // COMP FUNCIONAL SE VERIA ASI: const [state, setState] = useState({detalle: {}})
  }

  componentDidMount() {
    // hacer algo antes del renderizado
    const { id } = this.props.match.params;
    fetch("https://polar-sands-01232.herokuapp.com/country/" + id)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => this.setState({ detalle: respuestaJson }));

  }
  render() {
    return (
      <div>
        <div><Nav /></div>
        {this.state.detalle.message ?
          <Error />
          :
          <div className={s.container}>
            <div className={s.container1}>
            <div className={s.ciudad}>
              <h1> Nombre: {this.state.detalle.nombre} </h1>
              <h2> capital: {this.state.detalle.capital} </h2>
              <img className={s.imgciudad} src={this.state.detalle.imagBandera} alt="imagen de detalle" />
            </div>
            {
              this.state.detalle.actividads?.length > 0 ?
              <div className={s.actividad}>
                {this.state.detalle.actividads?.map(e =>
                  <div className={s.onlyActv}  key={e.id}>
                    <div className={s.actividadDiv} >
                      <h3>Actividad: <span>{e.nombre}</span></h3>
                      <p>Dificultad: <span>{e.dificultad}</span></p>
                      <p>Duracion: <span>{e.duracion}</span> Hs</p>
                      <p>Temporada: <span>{e.temporada}</span></p>
                    </div>
                    <img className={s.img} src={e.image} alt={e.nombre} />
                  </div>)}
              </div>
                :
                <div className={s.crear} >
                  <h3>
                    No hay actividades en esta pais
                  </h3>
                  <h5>¿desea crear una?</h5>
                  <Link to="/Actividad/crear">
                    <button className={s.btn}>
                      Crear nueva actividad
                    </button>
                  </Link>
                </div>
            }
            </div>
            <div className={s.detalle}>
              <h3> Continente: {this.state.detalle.continente} </h3>
             <h3> Sub-Region: {this.state.detalle.subRegion} </h3>
             <h3> Poblaciòn: {this.state.detalle.poblacion} </h3>
             <h3> Area: {this.state.detalle.area} </h3>
             <h3> ID: {this.state.detalle.id} </h3>
            </div>
          </div>}
      </div>
    )
  }
}
export default Detail;