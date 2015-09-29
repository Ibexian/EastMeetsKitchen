var fs = require('fs');
var mkdirp = require('mkdirp');
var tag = "blog";

var writer = function(name, content) {
	fs.writeFile("./output/" + name + ".md", content, { mode: '0666' }, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log(name + " was saved");
	});
};

var reader = function(name, type) {
	var content = "";
	var fileName = "";
	fs.stat('./input/' + name + '.json', function(err, data){
		var creationDate = new Date(data.birthtime);
		fileName += creationDate.getFullYear() + "-" + 
			(creationDate.getMonth() > 9 ? creationDate.getMonth() : "0" + creationDate.getMonth()) + "-" + 
			(creationDate.getDate() > 9 ? creationDate.getDate() : "0" + creationDate.getDate()) + "-" + name;
	});
	fs.readFile('./input/' + name + '.json', 'utf8', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var json = JSON.parse(data);
	    content += "---\rlayout: post\rcategories: " +  type + "\rtags: [" + type + "]";
	    for (var property in json) {
	    	//This is where the top matter is cleaned up (e.g. pic == image > feature, title and description need quotes)
		    if (json.hasOwnProperty(property)) {
		    	switch (property) {
		    		case "title":
		    			content += "\r" + property + ": \"" + json[property].replace(/(\r\n|\n|\r)/gm,"") + "\"";
		    			break;
		    		case "description":
		    			content += "\rexcerpt: \"" + json[property].replace(/(\r\n|\n|\r)/gm,"").replace(/"/g, '\'') + "\"";
		    			break;
		    		case "pic":
		    			var value = json[property].split('/')[1];
		    			content += "\r" + "image:\r  feature: " + value;
		    			break;
		    		default:
		    			content += "\r" + property + ": " + json[property];
		    			break;
		    	}
		    }
		}
		if (tag === "video"){// There is no blog markdown for video
			return;
		}
	    fs.readFile('./input/_' + name + '/blog.markdown', 'utf8', function read(err, data) {
		    if (err) { throw err;}
		    var blogData = data.replace(/^[\r\n]+|\.[\r\n]+$/, ""); //Remove final eol
		    content += "\r---\r\r" + blogData.replace(/!\[.*]\(\/img\/(\S*).*\)/g, "<figure> <img src='/images/$1'> </figure>");
			// Write the file
		    writer(fileName, content);
		});

		if (tag === "recipe"){
			fs.readFile('./input/_' + name + '/recipe.markdown', 'utf8', function read(err, data) {
		    	var newContent = "";
			    if (err) { throw err;}
			    newContent += "\r<section class='recipe'>\r" + data.replace(/!\[.*]\(\/img\/(\S*).*\)/g, "<figure> <img src='/images/$1'> </figure>") + "</section>";
				// Append to previously created file
		    	fs.appendFile("./output/" + fileName + ".md", content, function(err) {
				    if(err) { return console.log(err); }
				    console.log("recipe added");
				});
			});
		}
	});
};

//Make the output folder
mkdirp('./output', function(err) {
	if (err) { throw err;}
});

// Read the file
var content;

fs.readdir( "./input/", function(err, files){
	function isJson(value) {
		return value.substr(value.length - 4, 4) === 'json';
	}
	var filtered = files.filter(isJson);
	for(var i=0; i <filtered.length; i++ ){
		reader(filtered[i].slice(0, filtered[i].length - 5), tag);
	}
});


