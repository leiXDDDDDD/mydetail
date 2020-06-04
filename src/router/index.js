/*
 * @Author: your name
 * @Date: 2020-06-04 22:36:50
 * @LastEditTime: 2020-06-04 22:51:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \detail\src\router\index.js
 */

import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import App from "../App";
import Main from '../views/Main'
export default () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/home" component={Main} />
    </Switch>
  </Router>
);
