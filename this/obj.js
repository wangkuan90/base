var someuser = {
	name: 'byvoid',
	display: function() {
		console.log(this.name);
	}
};
someuser.display(); //    byvoid

var foo = {
	bar: someuser.display,
	name: 'foobar'
};
foo.bar(); //    foobar

var someuser = {
	name: 'byvoid',
	func: function() {
		console.log(this.name);
	}
};

var foo = {
	name: 'foobar'
};
someuser.func(); //    byvoid
foo.func = someuser.func;
foo.func(); //    foobar
name = 'global';
func = someuser.func;
func(); //    global