import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {} from "";

function App() {
  return (
    <Router>
      <div>
        {/* Sample nav - redesign later 👌 */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
