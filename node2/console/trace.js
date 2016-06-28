var user = {
	name : "wangkuan",
	getName : function(){
		return this.name;
	},
	setName: function(name){
		this.name = name;
	}
};
var timer = setInterval(function(){
	console.log("call back");
}, 1000);
//setTimeout(function(aa, name){
//	console.log(aa);
//	console.log(name);
//}, 100, 111, "wangkuan");
timer.unref();
setTimeout(function(){
	console.log("delete call");
	
},5000);
setTimeout(function(){
	console.log("ref call");
//	timer.ref();
},10000);
