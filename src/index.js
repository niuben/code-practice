import './index.scss';
import "./style/reset.scss";
import "./style/common.scss";
import "./style/layout.scss";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from "./component/header/index";
import MarkDown from "./component/markdown/index";
import Edit from "./component/edit/index";
import Run from "./component/run/index";
import UnitTest from "./component/unittest/index";
import List from "./component/list/index";

import Worker from "./model/run.worker.js";

// import * as serviceWorker from './serviceWorker';
import {HEADER, HEADER_CONTEXT, Data} from "./model/index";

/*
* 问题1: 各个组件如何获取数据？
* 1. 使用Context上下文，通过Provider方式提供数据,每个组件通过useContext方法获取信息;

* 问题2: 当value值发生变化时，如何通知每个组件
* 1. 查看组件Provider方式，默认当Provider发生变化时子组件都会被重新渲染;
* 2. 原因是函数式组件没有重新运行;
*/ 


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      HEADER: HEADER,
      UnitTest: []
    } 
        
    /*
    * 创建一个Worker对象
    */
    this.MyWorker = new Worker();
    var that = this;
    this.MyWorker.onmessage = function(e){      
      that.state.UnitTest.push(e.data);
      that.forceUpdate();
    }

    /*
    *
    */ 


  }
  render(){
    var {activeIndex} = this.state;
    var stepObj = Data["steps"][activeIndex - 1];

    return <HEADER_CONTEXT.Provider value={this.state.HEADER}>
      <Header data={this.state.HEADER} index={activeIndex} onChange={()=>{                                    
        
        //修改选中状态
        // var currentHeader = this.state.HEADER;
        // currentHeader = currentHeader.map((obj, index)=>{
        //   delete obj.actived;
        //   if(activeIndex == index) obj.actived = true;
        //   return obj;
        // });
        this.setState({
          activeIndex: 0
        });

      }} />
      {/* 整体布局 */}
      <div class="content">
        {
          activeIndex == 0 ? <List data={Data.steps} onChange={(index)=>{
            this.setState({
              activeIndex: index
            });
          }}/> : <React.Fragment>          
            <div class="content-left">   
              {/* 文档显示 */}
              <MarkDown html={ typeof stepObj == "object" ? stepObj.markdown : "" } />          
            </div>
            <div class="content-right">
              <Edit codes={typeof stepObj == "object" ?  stepObj.codes : "no code"} onBlur={(content)=>{
                stepObj.codes = content;
              }} />
              <p className="clearfix">
                <button className="btn" style={{"float": "right", "margin-top": "15px"}} onClick={(e)=>{
                  //发送单个测试用例                      
                  this.state.UnitTest = [];
                  stepObj.cases.map((obj, index)=>{
                    console.log(obj, index);
                    this.MyWorker.postMessage([index, stepObj.codes, obj.fn, obj.value]);
                  })
                }}>run</button>
              </p>
              <UnitTest data={this.state.UnitTest}/>
            </div>
          </React.Fragment>
        }
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
// serviceWorker.unregister();
