document.domain = "test1.com";
var crossDomain = {
	iframe$: null,
	url: null,
	ajax: function(url){
		this.url = url;
		this.iframe$ ? this.createIfram() : this.domainAjax();;
	},
	createIfram: function(){
		var iframe = document.createElement("iframe");
		iframe.src = "http://b.test1.com:8020/base/crossdomain/domain%2biframe/iframe.html";
		iframe.id = "iframeCrossDomain";
		iframe.style.display = "none"
		document.body.appendChild(iframe);
		var that = this;
		if(iframe.attachEvent){
			iframe.addachEvent("onload", function(){
				that.iframe$ = document.getElementById(iframe.id).contentWindow.$;
				that.domainAjax(iframe.id);
			});
		}else{
			iframe.onload = function(){
				that.iframe$ = document.getElementById(iframe.id).contentWindow.$;
				that.domainAjax(iframe.id);
			};
		}
	},
	domainAjax: function(iframeId){
		this.iframe$.ajax({
			url: url,
			datetype:"json"
		})
		.then(function(res){
			console.log("成功了");
			console.log(res);
		})
		.fail(function(res){
			console.log("失败了");
			console.log(res);
		});
	}
};

crossDomain.ajax("http://b.test1.com:8020/base/crossdomain/domain%2biframe/json.js");
//.then(function(res){
//	
//});
