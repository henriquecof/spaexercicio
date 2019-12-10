import React from 'react';
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Contato from './components/contact/contato';

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contato} />
      </Switch>
    </Container>
  </main>
);

export default Main;
