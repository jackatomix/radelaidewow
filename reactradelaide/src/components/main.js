import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Art from "./art";
import FoodandWine from "./foodandwine";
import Movies from "./movies";
import Sports from "./sports";
import Kids from "./kids";
import Music from "./music";
import Holiday from "./holiday";
import SpecialEvents from "./specialevents";
import Videos from "./videos";
import Theatre from "./theatre";
import VlogsAndBlogs from "./vlogsandblogs";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/art" component={Art} />
    <Route exact path="/foodandwine" component={FoodandWine} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/sports" component={Sports} />
    <Route exact path="/kids" component={Kids} />
    <Route exact path="/music" component={Music} />
    <Route exact path="/specialevents" component={SpecialEvents} />
    <Route exact path="/videos" component={Videos} />
    <Route exact path="/theatre" component={Theatre} />
    <Route exact path="/holiday" component={Holiday} />
    <Route exact path="/vlogsandblogs" component={VlogsAndBlogs} />
  </Switch>
);

export default Main;
