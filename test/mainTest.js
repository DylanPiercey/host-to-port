var assert = require("assert");
var toPort = require("../");

describe("host-to-port", function () {
	it("should convert a hostname to a port", function () {
		assert.equal(toPort("abc.com"), 10307);
		assert.equal(toPort("abcd.com"), 10357);
	});

	it("should ignore case", function () {
		assert.equal(toPort("ABC.com"), 10307);
		assert.equal(toPort("abcD.Com"), 10357);
	});

	it("should accept a starting and ending range", function () {
		assert.equal(toPort("abc.com", [100, 10000]), 407);
		assert.equal(toPort("9".repeat(100000)), 42406);
	});
});
