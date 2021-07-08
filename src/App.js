import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Signup} path="/register" />
        <Route exact component={Home} path="/home" />

        {/* <PrivateRoute exact component={Home} path="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
