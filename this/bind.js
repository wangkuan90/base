var someuser = {
	name: 'byvoid',
	func: function() {
		console.log(this.name);
	}
};
var foo = {
	name: 'foobar'
};
//func = someuser.func.bind(foo);
func = function(){
	someuser.func.call(foo);
}

func(); //    foobar
func2 = func.bind(someuser);
func2(); //    foobar