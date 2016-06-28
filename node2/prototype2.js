function Person(name){
	this.name = name;
};
Person.prototype.say = function(){
	console.log("I am saying");
};

var Male = function(name){
	Person.call(this, name);
};

Male.prototype = Person.prototype;

Male.prototype.say2 = Male.prototype.say;

Male.prototype.say = function(){
	this.say2();
};

var male = new Male("wangkuan");
male.say();
