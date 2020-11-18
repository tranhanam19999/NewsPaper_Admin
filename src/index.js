import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard/index'
import User from './pages/User/index'
import Article from './pages/Article/index'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history"; 

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Article" component={Article} /> 
      <Route path="/User" component={User} /> 
      <Route path="/Dashboard" component={Dashboard} />            
    </Switch>
  </Router>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
