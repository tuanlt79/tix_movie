import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Loading from "./Component/Loading/Loading";
import Detail from "./Component/Detail/Detail";
import { HeaderTemplate } from "./template/HeaderTemplate";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import { createBrowserHistory } from "history";
import Register from "./Component/Register/Register";
import Profile from "./Component/Profile/Profile";
import Admin from "./Component/Admin/Admin";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <Loading /> */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <HeaderTemplate exact path="/detail/:id" Component={Detail} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <HeaderTemplate exact path="/profile" Component={Profile} />
          <Route exact path="/admin" component={Admin} />

          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
