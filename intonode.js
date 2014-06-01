// write some node code finally!
//process.stdout.write("Hello World!");
//console.log("Hello World!");

function printHelp() {
	console.log("3.js usage:");
	console.log("");
	console.log("--help prints this help");
	console.log("--file=filename  load this file");
	console.log("");
}


//printHelp();

// var fs = require("fs"); example of a module call, fs would be the module

var argv = require('minimist')(
	process.argv.slice(2),
	{ "string": ["file"] } //never treat as a boolean
);  

if (argv.help || !argv.file) {
	printHelp();
	process.exit(1);
}

var hello = require(__dirname + "/helloworld3.js");

hello.say(argv.file)
.val(function(contents){
	console.log(contents.toString())
})
.or(function(err){
	console.error(err.toString());
});