function SiteAdmin(nickName, siteName) {
	this.nickName = nickName;
	this.siteName = siteName;
}
SiteAdmin.prototype.showAdmin = function() {
	console.log(this.nickName + "是" + this.siteName + "的站长!");
};
SiteAdmin.prototype.showSite = function(siteUrl) {
	this.siteUrl = siteUrl;
	return this.siteName + "的地址是" + this.siteUrl;
};
var matou = new SiteAdmin("脚本之家", "WEB前端开发");
var matou2 = new SiteAdmin("脚本之家", "WEB前端开发");
matou.age = "30";

console.log(matou.hasOwnProperty("nickName")); //true
console.log(matou.hasOwnProperty("age")); //true
console.log(matou.hasOwnProperty("showAdmin")); //false
console.log(matou.hasOwnProperty("siteUrl")); //false
console.log(SiteAdmin.prototype.hasOwnProperty("showAdmin")); //true
console.log(SiteAdmin.prototype.hasOwnProperty("siteUrl")); //false
console.log(SiteAdmin.prototype.isPrototypeOf(matou)); //true
console.log(SiteAdmin.prototype.isPrototypeOf(matou2)); //true

var buz = {
	fog: 'stack'
};

for (var name in buz) {
	if (buz.hasOwnProperty(name)) {
		console.log("this is fog (" + name + ") for sure. Value: " + buz[name]);
	} else {
		console.log(name); // toString or something else
	}
}