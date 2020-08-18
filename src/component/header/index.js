import "./nav.scss";
import "./list.scss";
import React, { useContext, useState, useReducer} from "react";

import {HEADER, HEADER_CONTEXT, updateHeader} from "../../model/index";

function reducer(state, action){
  console.log("reducer", state);
  var activeIndex
  switch(action.type){
    case "SET_ACTIVE": 
      activeIndex =  action.index;
    break;    
  }

  state = state.map((obj, index)=>{
    delete obj.actived;
    if(activeIndex == index) obj.actived = true;
    
    return obj;
  });

  updateHeader(state);
  console.log("HEADER", HEADER);

  return state;
}

/*
* 创建列表
* 1. 点击时修改选中状态序列，并通知上层组件k;
*/
export default function Header(a, b, c){
  
  // var useHEADER = useContext(HEADER_CONTEXT);
  // console.log("context", HEADER);

  var [currentHeader, dispatch] = useReducer(reducer, useContext(HEADER_CONTEXT));
  
  return <div className="header">    
    <div className="nav">
      <h1>React源码学习-Fiber Tree</h1>
    </div>
    <ul className="list clearfix">
      {
        currentHeader.map((obj, index)=>{
          return <li key={index} className={obj.actived == true ? "active" : ""} onClick={()=>{
            dispatch({
              type: "SET_ACTIVE",
              index: index
            });
          }}>{index + 1}. {obj.title}</li>
        })

        // <li>总体代码</li>        
        // <li>1. CreateElement</li>
        // <li>2. Render</li>
        // <li>3. Concurrent Mode</li>
        // <li>4. Fibers</li>              
      }
    </ul>
  </div>
}