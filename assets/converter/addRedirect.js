var fs = require('fs');

var writer = function(name, content) {
	fs.writeFile('../../_posts/' + name, content, { mode: '666' }, function(err) {
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
			var name = value.split('-').splice(3).join("-").split('.')[0] + ".html";
			console.log(name);
			fs.readFile("../../_posts/" + value, 'utf8', function(err, data) {
			    if (err) { throw err; }
			    var match = data.match(/categories: (.*)/g)[0].substr(12).replace(/[\[\]\s]/g, '').split(",");
			    content += "---\rredirect_from: ";
			    match.map(function(cat){
			    	content += "\r  - "+ cat +"/" + name;
			    });
			    content +=  data.substr(3);
			    writer(value, content);
			});
		}
	});
});


