function A(x) {　　
	this.x = x;
};

function B(x, y) {
	　
	A.call(this, x);
	this.y = y;
};

var a = new A(1);

var b = new B(2, 3);

b;