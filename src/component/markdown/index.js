import "./github-theme.scss";

import React from "react";

export default function MarkDown(props){    
    return <div className="markdown markdown-body" id="markdown">        
        <div dangerouslySetInnerHTML={{__html: props.html}}></div>        
    </div>
}