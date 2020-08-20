import "./nav.scss";
import "./list.scss";
import React from "react";

export default function Header(props){

  return <div className="header">    
    <div className="nav">
      <h1>React源码学习-Fiber Tree <button className="btn btn-small" onClick={()=>{
        props.onChange && props.onChange(0);
      }}>返回列表</button></h1>
      
    </div>
    {/* 
    <ul className="list clearfix">
      {
        props.data.map((obj, index)=>{
          return <li key={index} className={obj.actived  ? "active" : ""} onClick={()=>{            
            props.onChange && props.onChange(index);
          }}>{index + 1}. {obj.title}</li>
        })
      }
    </ul> */}
  </div>
}