import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import "../src/assets/scss/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound404 from "./pages/Notfound404";
import Seller from "./pages/Seller";
import ProtectedRoute from "./Components/AuthRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: "/home",
              }}
            />
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
          <ProtectedRoute path="/seller" component={<Seller />} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
