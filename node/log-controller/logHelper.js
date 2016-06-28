var log4js = require('log4js'),
	fs = require("fs"),
	path = require("path"),
	redis = null;

if(Config.redis.open){
	redis = require("./../servers/redis")
}
// 目录创建完毕，才加载配置，不然会出异常
if(Config.log.position === "absolute"){
	log4js.configure('./log-controller/log4js.json', { reloadSecs: 300 });
}else{
	log4js.configure('./log-controller/log4js-deploy.json', { reloadSecs: 300 });
}

var logInfo = log4js.getLogger('logInfo');
	logError = log4js.getLogger('logErr');

exports.helper = {
	debug : function(msg){
		Config.log.netSwith && log4js.getLogger('logDebug').debug(msg || "");  
	},
	info : function(msg){
		Config.log.netSwith && logInfo.info(msg || "");  
	},
	warn : function(msg){
		Config.log.netSwith && log4js.getLogger('logWarn').debug(msg || "");  
	},
	error : function(msg){
		Config.log.netSwith && logError.error(msg || "");  
	}
};
var count = 1;
// 配合express用的方法  
exports.use = function(app) {  
    //页面请求日志, level用auto时,默认级别是WARN  
    app.use(log4js.connectLogger(logError, function(req, res, formatFn) {
    		// TODO  加载html页面
    		if(req && req.res && req.res.statusCode !== 200){
    			return {
    				code : req.res.statusCode,
    				url: req.headers.host + req._parsedUrl.pathname,
    				"user-agent" : req.headers["user-agent"]
    			};
    		}
	}));
};  