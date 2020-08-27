export function get(name) {
    
    var start = window.location.href.indexOf("?");
    var locationSearch = window.location.href.substr(start + 1, window.location.href.length );
    var paramsArray = locationSearch.split("&");
    for (var i = 0; i < paramsArray.length; i++) {
        var param = paramsArray[i];
        var paramArray = param.split("=");        
        if (paramArray[0] == name) {
            paramArray.shift();
            return paramArray.join("=");
        }
    }
}
