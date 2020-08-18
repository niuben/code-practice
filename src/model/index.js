import React  from "react";
/*
* 创建公共数据，用于数据展示（v1.0暂时不需要先写固定）;
*/
export const data = {
  
}  

/*
* 代码列表
*/ 
export const CODE = [{
    index: 1,
    content: `

    `
}];

/*
* 创建单元测试
*/ 
export const CASE = [{
    index: 1,
    cases: []  
}]

/*
* 
*/ 
export var HEADER = [{
    index: 0,
    title: "总汇",
    actived: true

},{
    index: 0,
    title: "createElement",    
}];

export const HEADER_CONTEXT = React.createContext(HEADER);

export function updateHeader(nextHeader){
    HEADER = nextHeader;
}