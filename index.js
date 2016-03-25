"use strict";

/** Default port range */
var RANGE = [10000, 49151];

/** Character to integer map, ordered from least to most used in english */
var CHAR_MAP = {
	"e": 1,
	"t": 2,
	"a": 3,
	".": 4,
	"-": 5,
	"o": 6,
	"i": 7,
	"n": 8,
	"s": 9,
	"h": 10,
	"r": 11,
	"d": 12,
	"l": 13,
	"c": 14,
	"u": 15,
	"m": 16,
	"w": 17,
	"f": 18,
	"g": 19,
	"y": 20,
	"p": 21,
	"b": 22,
	"v": 23,
	"k": 24,
	"j": 25,
	"x": 26,
	"q": 27,
	"z": 28,
	"0": 29,
	"1": 30,
	"2": 31,
	"3": 32,
	"4": 33,
	"5": 34,
	"6": 35,
	"7": 36,
	"8": 37,
	"9": 39
}

module.exports = hostToPort;

/**
 * Gets a valid unique port for a given hostname.
 *
 * @param {String} hostname - the hostname to convert to a port.
 * @param {Array} [range] - optional port range to generate ports in.
 * @return {Number}
 */
function hostToPort (hostname, range) {
	hostname = String(hostname).toLowerCase();
	range    = range || RANGE;
	var port = range[0]; // Start at a specific port range.
	var max  = range[1];

	// Increment the port number based on the CHAR_MAP above.
	for (var i = hostname.length; i--;) {
		port += CHAR_MAP[hostname[i]] || 0;
	}

	// We ensure more unique values here by forcing different lengths to start at different values.
	// "9" -> 39
	// "ee" -> 40
	port += 38 * (hostname.length - 1);

	// Check to see if we have gone over the port range.
	// This means the host name is super long or the range is too narrow.
	while (port > max) port -= max;

	return port;
}
