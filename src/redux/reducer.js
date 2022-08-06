import { GET_COUNTRY, GET_ACTIVIDAD, REMOVE_ACTIVIDAD,ADD_ACTIVIDAD,FILTRAR_CONTINENTE,ORDER,BUSQUEDA,FILTRAR_ACTIVIDAD } from "./actions";
// estado inicial
let initialState = {
  country: [],
  AuxCountry:[],
  actividad: [],
};

// export un reducer que tenga logica para las actions

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        AuxCountry:action.payload,
      };
    case FILTRAR_CONTINENTE:
        const filter = action.payload === "All" ? [...state.AuxCountry] : [...state.AuxCountry].filter(e => e.continente === action.payload)
        return{
            ...state,
            country: filter,
        };
    case ORDER:
      const countriesSort = [...state.country];
      if(action.payload === "asc"){
        countriesSort.sort(function(a,b){
          if(a.nombre > b.nombre){
            return 1;
          };
          if (a.nombre < b.nombre){
            return -1
          };
          return 0
        })
      };
      if (action.payload === "desc") {
        countriesSort.sort(function (a,b){
          if(a.nombre> b.nombre){
            return -1;
          };
          if(a.nombre < b.nombre){
            return 1;
          };
          return 0
        })};
        if(action.payload ==="Menor"){
          countriesSort.sort(function(a,b){
            if(a.poblacion<b.poblacion){
              return -1
            };
            if(a.poblacion<b.poblacion){
              return 1
            };
            return 0
          })
        };
      if(action.payload ==="Mayor"){
        countriesSort.sort(function(a,b){
          if(a.poblacion>b.poblacion){
            return -1
          };
          if(a.poblacion>b.poblacion){
            return 1
          };
          return 0
        })
      };
    return{
              ...state,
              country: countriesSort,
    };
    case BUSQUEDA:
      return{
        ...state,
        country: action.payload
      };
    case GET_ACTIVIDAD:
      return {
        ...state,
        actividad:  action.payload, 
      };
    case FILTRAR_ACTIVIDAD:{
        const filter2  = action.payload === "All" ? [...state.AuxCountry] : 
        [...state.AuxCountry].filter(e => e.actividads && e.actividads.map(c =>( c.nombre)).includes(action.payload))
        return{
            ...state,
            country : filter2
        }
    };
    case REMOVE_ACTIVIDAD:
      return {
        ...state,
        actividad: state.actividad.filter((elemento) => {
          return elemento.id !== action.payload;
        }),
      };
    case ADD_ACTIVIDAD:
        return {
          ...state,
          actividad: [...state.actividad, action.payload], 
        };
    default:
      return { ...state };
  }
}
