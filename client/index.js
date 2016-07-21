import App from './components/App';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate';
import Register from './components/Register';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="pokemoncreate" component={PokemonCreate} />
      <Route path="Register" component={Register} />
    </Route>
  </Router>
  , document.getElementById('root'));
