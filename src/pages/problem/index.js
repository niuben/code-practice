
import React, { Component } from 'react';
import {get as getUrl} from "pure-funs/lib/url";
import {set as setCookie, get as getCookie} from "pure-funs/lib/cookie";


import Header from "../../component/header/index";
import MarkDown from "../../component/markdown/index";
import Edit from "../../component/edit/index";

import UnitTest from "../../component/unittest/index";

import Worker from "../../model/run.worker.js";

// import * as serviceWorker from './serviceWorker';
import { HEADER, HEADER_CONTEXT, Data } from "../../model/index";

/*
* 问题1: 各个组件如何获取数据？
* 1. 使用Context上下文，通过Provider方式提供数据,每个组件通过useContext方法获取信息;

* 问题2: 当value值发生变化时，如何通知每个组件
* 1. 查看组件Provider方式，默认当Provider发生变化时子组件都会被重新渲染;
* 2. 原因是函数式组件没有重新运行;
*/


export default class Problem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: getUrl("id"),
            HEADER: HEADER,
            UnitTest: [],
        };

        /*
        * 创建一个Worker对象
        */
        this.MyWorker = new Worker();
        var that = this;
        this.MyWorker.onmessage = function (e) {
            
            that.state.UnitTest.push(e.data);
            
            document.querySelector(".content-right").scrollTop = window.innerHeight - 50;

            var stepObj = that.getStep();            
            if(e.data.status != "equal"){
                stepObj.status = "error";
            }

            //当测试用例已经完成，修改提示状态
            if(that.state.UnitTest.length == stepObj.cases.length){
                that.state.UnitTestStatus = "end";
                that.forceUpdate();                

                // 之前case都通过测试，则stepObj.status则是undefined，那么则给整个函数设置一个正确的状态;
                if(stepObj.status == undefined){
                    stepObj.status = "success";
                }
            }

            that.forceUpdate();
        }

        // useBeforeunload(()=>{
        //     console.log("page close");
        // });

        /*
        * 页面关闭时保存data数据
        */
        window.onbeforeunload = function(){            
            localStorage.setItem("_DATA_", JSON.stringify(Data));
        }

    }
    getStep(){
        var { id } = this.state;
        var stepObj = Data["steps"][id - 1];
        return stepObj;
    }    
    render() {
        var stepObj = this.getStep();
        return (
            <React.Fragment>
                {/* <Beforeunload onBeforeunload={()=>{
                    alert(123);
                }} /> */}
                <Header data={this.state.HEADER}/>
                {/* 整体布局 */}
                <div class="content">                
                    <div class="content-left">
                        {/* 文档显示 */}
                        <MarkDown html={typeof stepObj == "object" ? stepObj.markdown : ""} />
                    </div>
                    <div class="content-right">
                        <Edit codes={typeof stepObj == "object" ? stepObj.codes : "no code"} onBlur={(content) => {
                            stepObj.codes = content;
                        }} />
                        <p className="clearfix">
                            <button className="btn" style={{ "float": "left", "margin-top": "15px", "margin-left": "0px",}} onClick={(e) => {
                                
                                //清空测试用例;                      
                                this.state.UnitTest = [];
                                this.state.UnitTestStatus = "run";
                                delete stepObj.status;

                                this.forceUpdate();

                                var index = 0;
                                // 给每个用例增加延迟效果                                
                                this.handle = setInterval(()=>{
                                    var obj = stepObj.cases[index];
                                    this.MyWorker.postMessage([index, stepObj.codes, obj.fn, obj.value]);
                                    if(++index >= stepObj.cases.length){
                                        clearInterval(this.handle);
                                    }
                                }, 2000);

                                // stepObj.cases.map((obj, index) => {
                                //     console.log(obj, index);
                                //     this.MyWorker.postMessage([index, stepObj.codes, obj.fn, obj.value]);
                                // });
                            }}>执行代码</button>
                        </p>
                        <UnitTest status={this.state.UnitTestStatus}  data={this.state.UnitTest} />
                    </div>                
                </div>
            </React.Fragment>)        
    }
}