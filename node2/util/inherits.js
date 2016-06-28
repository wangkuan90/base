var util = require("util");

function Base() {
	this.name = "base";
	this.base = 1991;
	this.sayHello = function() {
		console.log("Hello " + this.name);
	}

	Base.prototype.showName = function() {
		console.log(this.name);
	}
}

//util 的方法:
//isArray
//isBoolean
//isNull
//isNullOrUndefined
//isNumber
//isString
//isSymbol
//isUndefined
//isRegExp
//isObject
//isDate
//isError
//isFunction
//isPrimitive
//isBuffer