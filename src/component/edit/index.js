
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

/*
* 创建编辑器
* 1. 设置代码内容;
* 2. 保存代码内容; 将代码传递给公共组件;
*   
*/ 
export default function Edit(){
    return <div className="codeList">          
        <AceEditor mode="java" theme="github"/>
    </div>
}