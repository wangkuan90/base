document.domain = "test1.com";
var crossDomain = function() {
	this.loadFlag = false;
	this.iframe$ = null;
	this.iframe = null;
	this.init();
};
crossDomain.prototype = {
	init: function() {
		this.iframe = document.createElement("iframe");
		this.iframe.src = "http://b.test1.com:8020/base/crossdomain/domain%2biframe/iframe.html";
		this.iframe.id = "iframeCrossDomain";
		this.iframe.style.display = "none";
		document.body.appendChild(this.iframe);
	},
	createIfram: function() {
		var that = this;
		var defer = $.Deferred();
		if (this.iframe.attachEvent) {
			iframe.addachEvent("onload", function() {
				that.loadFlag = true;
				that.iframe$ = document.getElementById(that.iframe.id).contentWindow.$;
				defer.resolve();
			});
		} else {
			this.iframe.onload = function() {
				that.loadFlag = true;
				that.iframe$ = document.getElementById(that.iframe.id).contentWindow.$;
				defer.resolve();
			};
		}
		return defer.promise();
	},
	domainAjax: function(url) {
		var defer = $.Deferred();
		this.iframe$.ajax({
				url: url,
				datetype: "json"
			})
			.then(function(res) {
				defer.resolve(res);
			})
			.fail(function(res) {
				defer.reject(res);
			});
		return defer.promise();
	},
	ajax: function(url) {
		var that = this;
		if (this.loadFlag) {
			return this.domainAjax(url);
		} else {
			var defer = $.Deferred();
			$.when(that.createIfram()).done(function() {
				$.when(that.domainAjax(url)).done(function(res) {
					defer.resolve(res);
				}).fail(function(res) {
					defer.reject(res);
				});
			});
			return defer.promise();
		}
	}
};

new crossDomain().ajax("http://b.test1.com:8020/base/crossdomain/domain%2biframe/json.js")
	.done(function(res) {
		console.log("成功了");
		console.log(res);
	})
	.fail(function(res) {
		console.log("成功了");
		console.log(res);
	});