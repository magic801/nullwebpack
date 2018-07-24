let {compiler} = require('google-closure-compiler');

let cc = new compiler({
	js: 'prepack.o.js',
	compilation_level: 'ADVANCED'
});

let cp = cc.run((exitCode, code, err) => {
	console.log(code);
	console.error(err);
})
