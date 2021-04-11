import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import '../src/assets/scss/styles.scss';

//Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CardItemInCart from "./Components/Card/CardItemInCart";

function App() {
  const test = {
    isLoading: false,
    product: {
      name: "Name product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: "4.5",
      like: "30",
      images: "https://picsum.photos/200",
      price: "120000",
      sold: "0",
    },
  };
  return (
    <Router>
      <div>
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
          <Route path="/test">
            <div className="container"></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
