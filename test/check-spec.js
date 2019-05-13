var expect = require("chai").expect;
var tools = require("../lib/check");

describe("Tools", function() {

	describe("checkState()", function() {
		it("The state of the response should be OK", function() {
			var results = tools.checkState({ status: "OK"});
			expect(results).to.equal("OK");
		});
	});

	describe("loadAPIPage()", function() {

		this.timeout(5000);

		it("Load the API Endpoint page", function(done) {

			tools.loadAPIPage({ appendage: "services"}, function(html) {
				expect(html).to.be.ok;
				done();
			});

		});

	});

});


