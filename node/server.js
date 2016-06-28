require("./config");
require("./common");

global.log = require('./log-controller/logHelper');

var http = require("http"),
	express = require("express"),
	path = require("path"),
	app = express(),
	favicon = require('serve-favicon'),
	post = require('./post'),
	server = http.createServer(app),
	io = require('socket.io')(server),
	logger = log.helper;

exports.start = function() {

	// 注：配置里的日志目录要先创建，才能加载配置，不然会出异常  
	if (Config.log.open) {
		log.use(app);
	}

	app.use(favicon(path.join(__dirname, Config.deployProject, 'favicon.ico')));

	// 静态文件路径，须在响应头设置之后，否则仍将为默认值
	app.use(express.static(path.join(__dirname, '/', Config.deployProject)));

	post(app, io);

	server.listen(Config.nodeServer.port, Config.nodeServer.host, function() {
		var mes = "Server (" + Config.name + ") is listening on " + Config.nodeServer.host + ":" +
			Config.nodeServer.port;
		logger.info(mes);
		console.log(mes);
	});
};