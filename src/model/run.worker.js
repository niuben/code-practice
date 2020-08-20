onmessage = function(e){
    var codes = e.data[0];
    var cases = e.data[1];
    // 执行函数
    try{
        eval(codes);
        
    }catch(e){
        postMessage("执行错误");    
    }
    
    cases.map((obj, index)=>{
        try{
            var result = eval(obj.fn);
            if(result != obj.value){
                postMessage(["返回值不一致", result]);
            }
        }catch(e){
            postMessage(["执行错误", e]);
        }
    });
    // cases.map((case, index)=>{
    

    // });
    
       
}