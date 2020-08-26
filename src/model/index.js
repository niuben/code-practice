import React  from "react";

/*
* 创建公共数据，用于数据展示（v1.0暂时不需要先写固定）;
*/
function getData(){

    var data = localStorage.getItem("_DATA_");
    if(data != undefined && typeof data == "string"){
        return JSON.parse(data);
    }

    return {
        title: "React Render实现",
        steps: [{
            id: 1,
            title: "createTextElement",
            // status: "success",
            markdown: require("./md/createTextElement.md"),
            codes: `/*
* 创建createTextElement方法
* @type: 文本内容;
*/ 
function createTextElement(text){
    /* 填写代码 */ 
    return {
        
    }
}
`,
            cases: [{
                fn: 'createTextElement("hi react!")',
                value: {
                    type: "TEXT_ELEMENT",
                    props: {
                        nodeValue: "hi react!",
                        children:[]
                    }
                }
            }]
        }, {
            id: 2,
            title: "createElement",
            markdown: require("./md/createElement.md"),
            codes: `/*
* 创建createTextElement方法
* @type: 文本内容;
*/             
function createTextElement(text){    
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children:[]
        }
    }
}
            
/*
* 创建createElement方法
* @type: 标签类型;
* @props: 标签属性;
* @children: 子标签;
*/ 
function createElement(type, props, ...children){
    /* 填写代码 */ 
}            
`,
            cases: [{
                fn: 'createElement("hi", null, "hi react!")',
                value: {
                    "type": "hi",
                    "props": {
                        "children": [
                            {
                                "type": "TEXT_ELEMENT",
                                "props": {
                                    "nodeValue": "hi react!",
                                    "children": []
                                }
                            }
                        ]
                    }
                }
            }]
        },{
            id: 3, 
            title: "render",
            markdown: require("./md/createElement.md"),
            codes: `/*
    * 创建createTextElement方法
    * @type: 文本内容;
    */             
    function createTextElement(text){
    
        /* 填写代码 */ 
        return {
            type: "TEXT_ELEMENT",
            props: {
                nodeValue: text,
                children:[]
            }
        }
    }
                
    /*
    * 创建createElement方法
    * @type: 标签类型;
    * @props: 标签属性;
    * @children: 子标签;
    */ 
    function createElement(type, props, ...children){
        /* 填写代码 */
        return {
            type: type,
            props: {
                ...props,
                children: children.map((child)=>{
                    return typeof child == "object" 
                            ? child 
                            : createTextElement(child)
                        
                })
            }
        }
    }
    
    /*
    * @element: createElement创建的值;
    * @container: 显示的容器;
    */ 
    function render(element, container){
        /*编写代码*/  
        console.log(container);
    }
    `,
    cases: [{
        fn: 'render(createElement("hi", null, "hi react!"), dom.window.document.getElementByID("root"))',
        validation: function(){
            
        }
    }]
    
        }]
    }
    
}

export const Data = getData();

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
    codes: [{
        value: "",
    }]
}];

export const HEADER_CONTEXT = React.createContext(HEADER);

export function updateHeader(nextHeader){
    HEADER = nextHeader;
}