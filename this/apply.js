var someuser = {
	name: 'byvoid',
	display: function(words) {
		console.log(this.name + ' says ' + words);
	}
};
var foo = {
	name: 'foobar'
};

someuser.display.apply(foo, ['hello']); //    foobar says hello