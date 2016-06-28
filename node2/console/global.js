function ss(){
	console.log(1);
}
global.ss = ss;
console.log(module.id);
console.log(module.filename);
console.log(module.loaded);
