import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./Component/Loading/Loading";
import Detail from "./Component/Detail/Detail";
import { HeaderTemplate } from "./template/HeaderTemplate";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Switch>
          <Route exact path="/home" component={Home} />
          <HeaderTemplate exact path="/detail/:id" Component={Detail} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
