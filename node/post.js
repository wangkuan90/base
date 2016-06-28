var common = require("./servers/common");

module.exports = function(app, io) {

	// 获取网页配置信息
	app.post('/getConfig', common.getConfig);
	
	// 消息实时推送
	common.getList(io);
	
};