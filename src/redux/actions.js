import axios from 'axios'
export const GET_COUNTRY ="OBTENER CIUDADES"
export const GET_ACTIVIDAD ="OBTENER ACTIVIDADES"
export const REMOVE_ACTIVIDAD ="ELIMINAR CIUDADES"
export const ADD_ACTIVIDAD ="AGREGAR ACTIVIDAD"
export const FILTRAR_CONTINENTE ="FILTRAR CONTINENTE"
export const ORDER ="ORDER"
export const FILTRAR_POBLACION ="FILTRAR POBLACION"
export const FILTRAR_ACTIVIDAD ="FILTRAR ACTIVIDAD"
export const BUSQUEDA ="BUSCAR"
//ACTIONS CREATORS

export function getCountry(){
  return async function (dispatch) {
    return axios.get("https://polar-sands-01232.herokuapp.com/country")
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) =>
      dispatch({ type: GET_COUNTRY, payload: respuestaJson })
    );
  
  }
}
export function filterContinent(payload){
  return {
      type: FILTRAR_CONTINENTE,
      payload
  }
}
export function Order(payload){
  return{
      type: ORDER,
      payload
  }
}
export function GetName(name){
  return async (dispatch) =>{
      return await axios.get(`https://polar-sands-01232.herokuapp.com/country?nombre=` + name)
      .then(res => dispatch({
          type: BUSQUEDA,
          payload: res.data
      }))
      .catch(error=> window.alert(`Error: ${name} no se encuentra en la base de datos`))
  }
}
export function filterActivity(payload){
  return {
      type: FILTRAR_ACTIVIDAD,
      payload
  }
}
export function getActividad(){
  return async function (dispatch) {
    return axios.get("https://polar-sands-01232.herokuapp.com/actividad")
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) =>
      dispatch({ type: GET_ACTIVIDAD, payload: respuestaJson })
    );
  }
}
export function removeActividad(id){
return async (dispatch) => {
  return axios.delete("https://polar-sands-01232.herokuapp.com/actividad/delete/"+id)
 .then(res => dispatch({
     type: REMOVE_ACTIVIDAD, 
  }))
}
}
  export function addActividad(Actividad){
    return async function (dispatch){
      const data = await axios.post("https://polar-sands-01232.herokuapp.com/actividad/",(Actividad))
      return data;
  }

}