var fs = require('fs');

var writer = function(name, content) {
	fs.writeFile('../../_posts/' + name, content, { mode: '755' }, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log(name + " was saved");
	});
};

fs.readdir( "../../_posts/", function(err, files) {
	files.map(function(value) {
		var content = "";
		if (value.substr(value.length - 2, 2) === 'md') { //If this is a markdown file
			//Find the name of the file and add the file type to it
			var name = value.split('-').splice(3).join("-").split('.')[0] + ".html";
			fs.readFile("../../_posts/" + value, 'utf8', function(err, data) {
			    if (err) { throw err; }
			    //Get the categories of each post
			    var match = data.match(/categories: (.*)/g)[0]
			    	.substr(12)
			    	.replace(/[\[\]\s]/g, '')
			    	.split(",");
			    //replace the initial front matter yml
			    content += "---\rredirect_from: ";
			    //for each category add a redirection
			    match.map(function(cat){
			    	content += "\r  - "+ cat +"/" + name;
			    });
			    //Add back in the remainder of the file
			    content +=  data.substr(3);
			    //write the file again
			    writer(value, content);
			});
		}
	});
});


