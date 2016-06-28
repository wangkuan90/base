function Parent() {

	this.sayAge = function() {
		console.log(this.age);
	}
}

Parent.prototype.sayParent = function() {
	alert("this is parentmethod!!!");
}

function Child(firstname) {
	Parent.call(this);
	this.fname = firstname;
	this.age = 40;
	this.saySomeThing = function() {
		console.log(this.fname);
		this.sayAge();
	}
}
Child.prototype = new Parent();
var child = new Child("张");
child.saySomeThing();

child.sayParent();