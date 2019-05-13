var https = require("https");

module.exports = {

	checkState(obj) {
		return '${obj.status}';
	},

	loadAPIPage(person, callback) {

		var url = 'https://us-west-2.cloudconformity.com/v1/${obj.appendage}';

		https.get(url, function(res) {

			var body = "";

			res.setEncoding("UTF-8");

			res.on("data", function(chunk) {
				body += chunk;
			});

			res.on("end", function() {
				callback(body);
			});
		});

	}

};