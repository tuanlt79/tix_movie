import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./Component/Loading/Loading";
import Detail from "./Component/Detail/Detail";
import { HeaderTemplate } from "./template/HeaderTemplate";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Switch>
          <Route exact path="/home" component={Home} />
          <HeaderTemplate exact path="/detail/:id" Component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
