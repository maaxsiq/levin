import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const Routes: React.FC = () => {
  return (
    <Switch>
        <Route component={Login} path="/" exact />       
        <Route component={Home} path="/home" />       
    </Switch>
  );
};
