/**
 * 配置文件
 * @type {Object}
 */
global.Config = {
	name: 'My H5-Node Server',
	webServer: "http://127.0.0.1:8088/", // appservice 地址
	version: "1.0", // 版本号
	deployProject: "../webapp", //部署文件
	redis: {
		open: false,               //是否连接 redis 配置
		host: "127.0.0.1",
		port: 6379,
		password: "321654",
		netSwith: false    // 网络日志开关
	},
	log: {
		open: false,
		position: "absolute", // absolute  绝对路径   relative 相对路径
		path: ""
	},
	nodeServer: {
		host: "127.0.0.1",
		port: 8088
	}
};