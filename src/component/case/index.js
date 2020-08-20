import React, { useState } from "react";
import "./index.scss";

/*
* 设置Case样式
* 1. Case样式状态显示; (错误还是成功)
* 2. 每个Case的状态展示; 
*/ 
export default function Case(props){
    

    return <div>
        <h2 className="successStatus">测试通过</h2>
        <div className="cases">
            <div className="case">
                <h3 className="successStatus">case{1}: 测试通过</h3>
                <div>输入: createElement(12, null)</div>
                <div>输出: createElement(12, null)</div>
                <div>期望: createElement(12, null)</div>
            </div>
            <div className="case">
                <h3 className="successStatus">case{1}: 测试通过</h3>
                <div>输入: createElement(12, null)</div>
                <div>输出: createElement(12, null)</div>
                <div>期望: createElement(12, null)</div>
            </div>
        </div>
    </div>
}
