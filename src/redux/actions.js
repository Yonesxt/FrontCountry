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

export function  getCountry(){
  return async function (dispatch) {
    let json = await axios("https://polar-sands-01232.herokuapp.com/country")
    const data = await json.data;
    return  dispatch({ type: GET_COUNTRY, payload: data })
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
    try {
      let json = await axios.get(`https://polar-sands-01232.herokuapp.com/country?nombre=` + name)
      const data = await json.data;
      return dispatch({
        type: BUSQUEDA,
        payload: data
    })
    } catch (error) {
      return window.alert(`Error: ${name} no se encuentra en la base de datos`)
    }
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
    const json = await axios("https://polar-sands-01232.herokuapp.com/actividad")
    const data = json.data
    return dispatch({ type: GET_ACTIVIDAD, payload: data })
   
  }
}
export function removeActividad(id){
return async (dispatch) => {
  await axios.delete("https://polar-sands-01232.herokuapp.com/actividad/delete/"+id)
  return dispatch({
     type: REMOVE_ACTIVIDAD, 
  })
}
}
  export function addActividad(Actividad){
    return async function (dispatch){
      const {data} = await axios.post("https://polar-sands-01232.herokuapp.com/actividad/",(Actividad))
      return data;
  }

}