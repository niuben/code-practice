import "./github-theme.scss";

import React from "react";
import marked from "marked";

import createElementMD from "../../model/md/createElement.md";


export default function MarkDown(){    
    return <div className="markdown-body">
        <div dangerouslySetInnerHTML={{__html: createElementMD}}></div>
    </div>
}