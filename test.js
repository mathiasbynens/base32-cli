import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(
		await execa.stdout('./cli.js', ['Hello world!']),
		'91jprv3f41vpywkccggg'
	);
	t.is(
		await execa.stdout('./cli.js', ['--decode', '91jprv3f41vpywkccggg']),
		'Hello world!'
	);
	t.is(
		await execa.stdout('./cli.js', ['-d', '91jprv3f41vpywkccggg']),
		'Hello world!'
	);
});
