import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import dashboard from './pages/Dashboard/index'
import user from './pages/User/index'
import article from './pages/Article/index'
import comment from './pages/Comments/index'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history"; 

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path='/' component={dashboard} />
      <Route path="/article" component={article} /> 
      <Route path="/user" component={user} />                
      <Route path="/comment" component={comment} />                
    </Switch>
  </Router>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
