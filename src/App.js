import "./App.css";
import { Route,Switch  } from "react-router-dom";
import Home from "../src/componente/contenedores/Home"
import kickOff from "../src/componente/contenedores/kick-off"
import Error from "../src/componente/contenedores/Error"
import Detail from "../src/componente/contenedores/Detail"
import Form from "../src/componente/dumbs/Form"
import Actividad from "../src/componente/dumbs/Actividad"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={kickOff} />
        <Route  exact path="/Ciudad" component={Home} />
        <Route  exact path="/Ciudad/:id" component={Detail} />
        <Route  exact path="/Actividad" component={Actividad} />
        <Route  exact path="/Actividad/crear" component={Form} />
        <Route><Error /></Route>
      </Switch>
    </div>
  );
}

export default App;
