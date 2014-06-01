function readFile(filename) {
	
	return ASQ(function(done) {

		var stream = fs.createReadStream(filename);
		var contents = "";

		stream.pipe( fs.createWriteStream(
			filename + ".backup"));

		stream.on('data', function(data) {
			contents += data;
			console.log("data");
		});

		stream.on('end', function(){
			done(contents);
		});

	
	});
}

function delayMsg(done,contents) {
	setTimeout(function(){
		done(contents);
	},2000);
}

function say(filename) {
	return readFile(filename).then(delayMsg);
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");


module.exports.say = say;


