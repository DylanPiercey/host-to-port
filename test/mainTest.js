var assert = require("assert");
var toPort = require("../");

describe("host-to-port", function () {
	it("should convert a hostname to a port", function () {
		assert.equal(toPort("abc.com"), 10079);
		assert.equal(toPort("abcd.com"), 10091);
	});

	it("should ignore case", function () {
		assert.equal(toPort("ABC.com"), 10079);
		assert.equal(toPort("abcD.Com"), 10091);
	});

	it("should accept a starting and ending range", function () {
		assert.equal(toPort("abc.com", [100, 10000]), 179);
		assert.throws(toPort.bind(null, "9".repeat(1424)));
		assert.throws(toPort.bind(null, "abc.com", [100, 178]));
	});
});
