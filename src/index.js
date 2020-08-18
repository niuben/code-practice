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

import {HEADER, HEADER_CONTEXT} from "./model/index";

console.log("HeaderModel", HEADER_CONTEXT);

ReactDOM.render(
  <React.StrictMode>    
    <HEADER_CONTEXT.Provider value={HEADER}>
      <Header onChange={()=>{
          console.log("null");
      }}/>
      <p>HEADER: {JSON.stringify(HEADER)}</p>
      <div class="content">      
        <div class="content-left">
          <div class="markdown markdown-body" id="markdown">
            <MarkDown  />
          </div>
        </div>
        <div class="content-right">
          <Edit />
        </div>
    </div>            
    </HEADER_CONTEXT.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
