var fs = require('fs');
var mkdirp = require('mkdirp');
var os = require('os');

var writer = function(name, content) {
	fs.writeFile("./output/" + name + ".md", content, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log(name + " was saved");
	});
};

var reader = function(name, type) {
	var content = "";
	fs.readFile('./input/' + name + '.json', 'utf8', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var json = JSON.parse(data);
	    content += "---\rlayout: post\rtags: [" + type + "]";
	    for (var property in json) {
	    	//This is where the top matter is cleaned up (e.g. pic == image > feature, title and description need quotes)
		    if (json.hasOwnProperty(property)) {
		        content += os.EOL + property + ": " + json[property];
		    }
		}

	    fs.readFile('./input/_' + name + '/blog.markdown', 'utf8', function read(err, data) {
	    	var newContent = "";
		    if (err) {
		        throw err;
		    }
		    //content = JSON.parse(data);
		    content += "\r---\r" + data;

		    //console.log(content);   // Write the file
		    writer(name, content);
		});


	});
};

//Make the output folder
mkdirp('./output', function(err) {
	console.log(err);
});

// Read the file
var content;
fs.readdir( "./input/", function(err, files){
	function isJson(value) {
		return value.substr(value.length - 4, 4) == 'json';
	}
	var filtered = files.filter(isJson);
	for(i=0; i < filtered.length; i++){
		reader(filtered[i].slice(0, filtered[i].length - 5), "tip");
	}
});


