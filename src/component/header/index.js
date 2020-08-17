import "./nav.scss";
import "./list.scss";

import React from "react";

export default function Header(){
    return <div className="header">    
      <div className="nav">
        <h1>React源码学习-Fiber Tree</h1>
      </div>
      <ul className="list clearfix">          
        <li>总体代码</li>        
        <li>1. CreateElement</li>
        <li>2. Render</li>
        <li>3. Concurrent Mode</li>
        <li>4. Fibers</li>              
      </ul>
    </div>
}