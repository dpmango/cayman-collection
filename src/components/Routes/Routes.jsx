import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from '@config/history';
import Layout from '@c/Layout/';

import NoMatch from './NoMatch';
import Home from './Home';
import Plan from './Plan';
import Process from './Process';
import Properties from './Properties';
import Property from './Property';
import Proposal from './Proposal';

const Routes = () => {
  return (
    <Layout variant="main">
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

        <Route component={NoMatch} />
      </Switch>
    </Layout>
  );
};

const CustomRouter = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default CustomRouter;
