# base32-cli [![Build status](https://travis-ci.org/mathiasbynens/base32-cli.svg?branch=master)](https://travis-ci.org/mathiasbynens/base32-cli)

base32-cli is a command-line interface for [base32](https://github.com/agnoster/base32-js), which is an implementation of Crockford’s version of Base32.

## Installation

```bash
$ npm install -g base32-cli
```

## Usage

```
$ base32 --help

  A CLI for Crockford’s version of Base32.

  Usage
    $ base32 string

  Options
    -d, --decode  Base32-decode instead of Base32-encoding

  Examples
    $ base32 'Hello world!'
    91jprv3f41vpywkccggg
    $ base32 --decode '91jprv3f41vpywkccggg'
    Hello world!
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_base32-cli_ is available under the [MIT](https://mths.be/mit) license.
