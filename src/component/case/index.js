import React, { useState } from "react";
import "./index.scss";

export default function Case(){
    var [count, setCount] = useState(1);
    return <div onClick={()=>{
        console.log(count);
        setCount((count)=>{
            return ++count;
        })
    }}>{count}</div>
}
