import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../src/view/Home";
import Meal from "../src/view/Meal";

function App() {
  return (

        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/FoodList' component={Meal} />
          </Switch>
        </Router>

  );
}

export default App;
