import './index.scss';
import "./style/reset.scss";
import "./style/common.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Case from "./component/case/index";
import Header from "./component/header/index";
import MarkDown from "./component/markdown/index";
import Edit from "./component/edit/index";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>    
    <Header />
    <Case />
    <MarkDown />
    <Edit />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
