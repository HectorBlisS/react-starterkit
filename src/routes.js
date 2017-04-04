import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/home/HomePage';
import App from './App';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={HomePage}/>
  </Route>
);
