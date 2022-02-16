import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from '@config/history';

import NoMatch from './NoMatch';
import Home from './Home';
import Login from './Login';
import Plan from './Plan';
import Process from './Process';
import Properties from './Properties';
import Property from './Property';
import Proposal from './Proposal';
import Blog from './Blog';
import HubSpot from '../HubSpot';
import BlogDetail from './BlogDetail';
import About from './About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/plan">
        <Plan />
      </Route>
      <Route exact path="/process">
        <Process />
      </Route>
      <Route exact path="/property">
        <Properties />
      </Route>
      <Route exact path="/property/:id">
        <Property />
      </Route>
      <Route exact path="/proposal">
        <Proposal />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/blog/:id">
        <BlogDetail />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route component={NoMatch} />
    </Switch>
  );
};

const CustomRouter = () => (
  <Router history={history}>
    <HubSpot />
    <Routes />
  </Router>
);

export default CustomRouter;
