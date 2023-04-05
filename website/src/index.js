import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Faq from './pages/Faq/Faq';
import SomeIdeas from './pages/SomeIdeas/SomeIdeas';
import reportWebVitals from './reportWebVitals';

import 'bulma/css/bulma.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/faq" exact={true} component={Faq} />
      <Route path="/someideas" exact={true} component={SomeIdeas} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
