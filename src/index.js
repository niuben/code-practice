import './index.scss';
import "./style/reset.scss";
import "./style/common.scss";
import "./style/layout.scss";


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/home/index";
import Problem from "./pages/problem/index";

console.log(Router, Route, Home,Problem);

/*
* 问题1: 各个组件如何获取数据？
* 1. 使用Context上下文，通过Provider方式提供数据,每个组件通过useContext方法获取信息;

* 问题2: 当value值发生变化时，如何通知每个组件
* 1. 查看组件Provider方式，默认当Provider发生变化时子组件都会被重新渲染;
* 2. 原因是函数式组件没有重新运行;
*/ 


ReactDOM.render(  
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/problem" component={Problem}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);