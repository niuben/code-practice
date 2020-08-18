import React, { useState } from "react";
import "./index.scss";

/*
* 设置Case样式
* 1. Case样式状态显示; (错误还是成功)
* 2. 每个Case的状态展示; 
*/ 
export default function Case(){
    var [count, setCount] = useState(1);
    return <div onClick={()=>{
        console.log(count);
        setCount((count)=>{
            return ++count;
        })
    }}>{count}</div>
}
