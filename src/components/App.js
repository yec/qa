/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import Page from "./Page";
import Faqs from "./Faqs";
import Header from "./Header";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";
import OnUpdate from "./OnUpdate";
import React from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components';

const Background = styled.div`
  background-color: rgb(248, 248, 248);
  flex: 1;
`;

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <Background>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route path="/faqs/:id?" component={Faqs} />
          <Route component={NotFoundPage} />
        </Switch>
        </Background>
        <Route component={OnUpdate} />
        <Route component={Footer} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
