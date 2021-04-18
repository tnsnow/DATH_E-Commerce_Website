import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "../src/assets/scss/styles.scss";

//Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound404 from "./pages/Notfound404";
import Seller from "./pages/Seller";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/seller">
            <Seller />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
