import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";
import Violet from "./Violet";
import Yellow from "./Yellow";
import Indigo from "./Indigo";
import Orange from "./Orange";

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
    <NavLink exact to="/red">
      Red
    </NavLink>
    <NavLink to="/green">Green</NavLink>
    <NavLink to="/violet">Violet</NavLink>
    <NavLink exact to="/blue">
      Blue only
    </NavLink>
    <NavLink to="/blue/indigo">Add indigo</NavLink>
    <NavLink to="/red/yellow"> Add Yellow</NavLink>
    <NavLink to="/red/orange">Add Orange</NavLink>

    <div id="rainbow">
      <Route path="/red" component={Red} />
      <Route path="/red/yellow" component={Yellow} />
      <Route path="/red/orange" component={Orange} />

      <Route path="/blue" component={Blue} />
      <Route path="blue/indigo" component={Indigo} />

      <Route path="/green" component={Green} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
