import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/home/HomePage';
import App from './components/App';
import UsersTable from './components/usersTable/UsersTable';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="the-users" component={UsersTable} />
    <Route path="*" component={HomePage}/>
  </Route>
);
