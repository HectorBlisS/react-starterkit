import React from 'react';
import {Router, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);


