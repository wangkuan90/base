var redis = require("redis");

//var client = redis.createClient(Config.redis.port, Config.redis.host, {});

//client.auth("95169xxxxx");

client.on("error", function(err) {
	console.log("Error : " + err);
	client.quit();
});                                                                                                                                                                                                                                                                             

exports.count = function(log) {
	
	client.INCR("num");
};
