import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./Component/Loading/Loading";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
