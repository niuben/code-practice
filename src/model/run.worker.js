import isEqual from "is-equal";
import jsdom  from "jsdom";


onmessage = function(e){    
    
    debugger;
    const { JSDOM } = jsdom;

    const dom = new JSDOM(`<div id="root"></div>`);
    const document = dom.window.document;

    
    // console.log("JSDOM", document);
    /*
    * 执行每个单元测试。当index等于0时,先运行code方式
    */ 
    var index = e.data[0];
    var code = e.data[1];
    var fn = e.data[2];
    var correctValue = e.data[3];
        
    // console.log("code", code, "fn", fn);
    var getStatus = createStatus(index, fn, correctValue);
    
    // 执行函数
    // if(index == 0){
        // try{
        //     eval(code + fn);
        // }catch(e){
        //     console.log("catch1");
        //     postMessage(getStatus("error", e));    
        // }
    // }            
    
    try{                        
        var result = eval(code + fn);
        postMessage(getStatus(isEqual(result, correctValue) ? "equal" : "unequal", result));
    }catch(e){
        console.log("catch2", e);
        postMessage(getStatus("error", "错误:" + e.message));
    }       
}

// 创建一个
function createStatus(index, fn, correctValue){
    return function(status, value){
        return {
            index: index,
            fn: fn,
            correctValue: correctValue,
            status: status, //equal, error, unequal
            value: value
        }
    }
}