onmessage = function(e){   
    postMessage("e", e.data[0], e.data[1]);
    console.log("e", e.data[0], e.data[1]);
    
}