import React, { Component } from 'react';
import './App.scss';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './views/Home';
import Single from './views/Single';
import List from './views/List';
import NewBeer from './views/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={List} />
          <Route path="/beers/random" exact component={Single} />
          <Route path="/beers/:id" exact component={Single} />
          <Route path="/new-beer" exact component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
