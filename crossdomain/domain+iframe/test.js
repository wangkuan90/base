// 定义主题
var subject = (function(){
    var dfd = $.Deferred();
    
    var task = function()
    {
        // 发布内容
        dfd.resolve("Alice");
    }
    
    setTimeout( task, 3000);
    
    return dfd.promise();
})();

// 两个观察者
var fn1 = function(content){
    console.log("fn1: " + content );
}

var fn2 = function(content){
    console.log("fn2: " + content );
}

// 注册观察者
$.when( subject )
.done( fn1 )
.done( fn2 );