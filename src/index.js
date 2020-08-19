import './index.scss';
import "./style/reset.scss";
import "./style/common.scss";
import "./style/layout.scss";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Case from "./component/case/index";
import Header from "./component/header/index";
import MarkDown from "./component/markdown/index";
import Edit from "./component/edit/index";

import * as serviceWorker from './serviceWorker';
import {HEADER, HEADER_CONTEXT} from "./model/index";



/*
* 问题1: 各个组件如何获取数据？
* 1. 使用Context上下文，通过Provider方式提供数据,每个组件通过useContext方法获取信息;

* 问题2: 当value值发生变化时，如何通知每个组件
* 1. 查看组件Provider方式，默认当Provider发生变化时子组件都会被重新渲染;
* 2. 原因是函数式组件没有重新运行;
*/ 
console.log("HeaderModel", HEADER_CONTEXT);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HEADER: HEADER      
    }    
  }
  render(){
    return <HEADER_CONTEXT.Provider value={this.state.HEADER}>
      <Header data={this.state.HEADER} onChange={(activeIndex)=>{                                    
        //修改选中状态
        var currentHeader = this.state.HEADER;
        currentHeader = currentHeader.map((obj, index)=>{
          delete obj.actived;
          if(activeIndex == index) obj.actived = true;
          return obj;
        });        
        this.setState({
          HEADER: currentHeader
        });

      }} />      
      <div class="content">      
        <div class="content-left">   
          <MarkDown />          
        </div>
        <div class="content-right">
          <Edit />
        </div>
    </div>
    </HEADER_CONTEXT.Provider>
  }
}

ReactDOM.render(  
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
