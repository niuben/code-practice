onmessage = function(e){
    
    /*
    * 执行每个单元测试。当index等于0时,先运行code方式
    */ 
    var index = e.data[0];
    var code = e.data[1];
    var fn = e.data[2];
    var correctValue = e.data[3];
        
    var getStatus = createStatus(index, fn, correctValue);
    
    // 执行函数
    // if(index == 0){
        try{
            eval(code);
        }catch(e){
            postMessage(getStatus("error", e));    
        }
    // }            
    try{
        var result = eval(fn);        
        postMessage(getStatus( result != correctValue ? "unequal" : "equal", result));        
    }catch(e){
        postMessage(getStatus("error", e));
    }       
}

// 
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