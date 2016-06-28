var server = {
	getConfig: function(req, res) {
		res.set('Content-type', 'application/json');
		res.set('Access-Control-Allow-Origin', '*');
		res.set("Access-Control-Allow-Headers", 'X-Requested-With');

		var hosptalDomain = req.headers.host.split(".")[0];
		res.json({
			env: Config.env,
			hosptalDomain: hosptalDomain,
			webServer: Config.webServer,
			webExtServer: Config.webExtServer,
			version: Config.version,
			hospital: require("./../hospital-config/" + hosptalDomain + ".js")
		});
	},
	getList: function(io) {

		var random = Common.getRandom(1, 10);

		io.on('connection', function(socket) {

			setTimeout(function() {
				socket.emit('getNews', {
					hello: 'world',
					random: random
				});
			}, random * 1000);
		});
	}
};

module.exports = server;