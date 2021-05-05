import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import "../src/assets/scss/styles.scss";

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
      <div>
        <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/">
<<<<<<< HEAD
=======
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/home">
>>>>>>> TNsnow
=======
            <Home />
          </Route>
          <Route path="/home">
>>>>>>> parent of 3d4eec7 (Route /home fixed)
=======
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
>>>>>>> parent of 7802657 (build component + feature product-detail)
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute path="/seller" child={<Seller />} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
