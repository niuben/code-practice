import React, { Component } from 'react';

import Header from "../../component/header/index";
import List from "../../component/list/index";

import { HEADER, HEADER_CONTEXT, Data } from "../../model/index";

/*
* 问题1: 各个组件如何获取数据？
* 1. 使用Context上下文，通过Provider方式提供数据,每个组件通过useContext方法获取信息;

* 问题2: 当value值发生变化时，如何通知每个组件
* 1. 查看组件Provider方式，默认当Provider发生变化时子组件都会被重新渲染;
* 2. 原因是函数式组件没有重新运行;
*/

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            HEADER: HEADER
        }       
    }
    render() {                
        return <div>
            <Header data={this.state.HEADER} path="home" />
            {/* 整体布局 */}
            <div class="home">                
                <List data={Data.steps} onChange={(index) => {
                    this.setState({
                        activeIndex: index
                    });
                }} />                  
            </div>
        </div>
    }
}