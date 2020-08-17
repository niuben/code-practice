
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


export default function Edit(){
    return <div className="codeList">          
        <AceEditor mode="java" theme="github"/>
    </div>
}