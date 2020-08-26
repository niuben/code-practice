
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

            var stepObj = that.getStep();            
            if(e.data.status != "equal"){
                stepObj.status = "fail";
            }else{
                stepObj.status = "success";
            }

            that.state.UnitTestStatus = "end";
            that.forceUpdate();


            that.scrollTop(window.innerHeight - 50);
            //当测试用例已经完成，修改提示状态

            //2020/8/26: 只测试单个用例;
            // if(that.state.UnitTest.length == stepObj.cases.length){
            //     that.state.UnitTestStatus = "end";
            //     that.forceUpdate();                

            //     // 之前case都通过测试，则stepObj.status则是undefined，那么则给整个函数设置一个正确的状态;
            //     if(stepObj.status == undefined){
            //         stepObj.status = "success";
            //     }
            // }

            that.forceUpdate();

            that.saveData();
        }

        // useBeforeunload(()=>{
        //     console.log("page close");
        // });

        /*
        * 页面关闭时保存data数据, 会导致Cookie删除失败;
        */
        // window.onbeforeunload = function(){            
        //     localStorage.setItem("_DATA_", JSON.stringify(Data));
        // }
    }
    saveData(){
        localStorage.setItem("_DATA_", JSON.stringify(Data));
    }
    getStep(){
        var { id } = this.state;
        var stepObj = Data["steps"][id - 1];
        return stepObj;
    }
    scrollTop(yAxis){
        document.querySelector(".content-right").scrollTop = yAxis;
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
                <div className="content">                
                    <div className="content-left">
                        {/* 文档显示 */}
                        <MarkDown html={typeof stepObj == "object" ? stepObj.markdown : ""} />
                    </div>
                    <div className="content-right">
                        <Edit codes={typeof stepObj == "object" ? stepObj.codes : "no code"} onBlur={(content) => {
                            stepObj.codes = content;
                        }} />
                        <p className="clearfix">
                            <button className={this.state.UnitTestStatus != "run" ? "btn" : "btn btn-disable"} style={{ "float": "right", "marginTop": "15px", "marginLeft": "0px"}} onClick={(e) => {
                                
                                if(this.state.UnitTestStatus == "run") return false;

                                this.saveData();

                                //清空测试用例;
                                delete stepObj.status;
                                
                                this.state.UnitTest = [];
                                this.state.UnitTestStatus = "run";
                                this.forceUpdate();
                                
                                //改变滚动条位置
                                this.scrollTop(window.innerHeight + 500);
                                                                                                
                                var index = 0;
                                // 给每个用例增加延迟效果                                                                

                                // 第一个版本只测试第一个用例;
                                // this.handle = setInterval(()=>{                                        
                                
                                setTimeout(()=>{
                                    
                                    var obj = stepObj.cases[index];
                                    this.MyWorker.postMessage([index, stepObj.codes, obj.fn, obj.value]);
                                    
                                    // if(++index >= stepObj.cases.length){
                                        //     clearInterval(this.handle);
                                        // }                                        
                                }, 2000);
                                

                                // stepObj.cases.map((obj, index) => {
                                //     console.log(obj, index);
                                //     this.MyWorker.postMessage([index, stepObj.codes, obj.fn, obj.value]);
                                // });
                            }}>
                                {
                                    this.state.UnitTestStatus != "run" ? "运行代码" : "运行中..."
                                }
                            </button>
                        </p>
                        <UnitTest status={this.state.UnitTestStatus}  data={this.state.UnitTest} />
                        <div id="test">
                            
                        </div>
                    </div>                
                </div>
            </React.Fragment>)        
    }
}