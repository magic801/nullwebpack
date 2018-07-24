let Prepack = require('prepack');

let options = {
	sourceMaps: true
};

Prepack.prepackFile(__dirname + '/t1.js', {
	sourceMaps: false
}, (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log((data.code));
	}
})


let data = Prepack.prepack('console.log("hello")', options);

console.log(JSON.stringify(data));