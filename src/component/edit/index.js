import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

/*
* 创建编辑器
* 1. 设置代码内容;
* 2. 保存代码内容; 将代码传递给公共组件;
*/ 

export default function Edit(props){
    return <div className="edit shadow">          
        <AceEditor style={{width: "100%", height: "100%"}} fontSize={16} mode="java" theme="github" value={props.codes} onBlur={(e, edit)=>{
            props.onBlur && props.onBlur(edit.getValue());
        }} />
    </div>
}