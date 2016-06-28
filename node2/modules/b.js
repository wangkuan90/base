var c = require("./a.js");
var d = require("./a.js");
console.log({a:1}==={a:1});
console.log(c===d);
c.a = 100;
console.log(c.a);
console.log(d.a);
console.log(c.aa());
