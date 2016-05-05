#!/usr/bin/env node

'use strict';

const base32 = require('base32');
const meow = require('meow');

const cli = meow(`
	Usage
	  $ base32 string

	Options
	  -d, --decode	Base32-decode instead of Base32-encoding

	Examples
	  $ base32 'Hello world!'
	  91jprv3f41vpywkccggg
	  $ base32 --decode '91jprv3f41vpywkccggg'
	  Hello world!
`, {
	'alias': {
		'd': 'decode'
	}
});

if (cli.flags.decode) {
	const flagValue = cli.flags.decode;
	if (typeof flagValue == 'string') {
		cli.input.unshift(flagValue);
	}
}

if (cli.input.length == 0) {
	console.error('Please supply some strings to be matched.');
	process.exit(1);
}

const input = cli.input.join(' ');
if (cli.flags.decode) {
	console.log(
		base32.decode(input)
	);
} else {
	console.log(
		base32.encode(input)
	);
}
