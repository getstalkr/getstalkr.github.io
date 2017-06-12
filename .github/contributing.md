# Contributing

So in love with **stalkr** that you just want to contribute to our website? 
Start reading this document and figure out how simple it is to get started!

## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Building](#building)
- [Testing](#testing)
- [Versioning](#versioning)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Open an Issue

[Open an Issue](https://github.com/getstalkr/getstalkr.github.io/issues/new) to report any problems or improvements. Be sure to include some description to explain the problem/improvement.

## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests and attach the along with the description.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

### The 5 magic steps

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -m 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :)

## Building

First install [Node.js](https://nodejs.org/en/download/) for the build process. 

Install all dependencies:

```sh
$ cd getstal.kr
$ npm install
```

Once you have the dependencies installed, run `npm start`. This will run the 
main tasks described [here](./../README.md#workflow).

## Testing

After building your changes, run each one of the `test:` tasks described 
[here](./../README.md#workflow):

```sh
$ npm run test:complexity
$ npm run test:perf
$ npm run test:regression
$ npm run test:npm
```

And evaluate all the results - if everything is OK, then 
[submit a pull request](#submit-a-pull-request).

## Versioning

It is intended to maintain this project under the 
[Semantic Versioning](http://semver.org/) guidelines. Releases will be numbered
with the following format:

`<major>.<minor>.<patch>`

## Code of Conduct

Help us keep this repo open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).

## License

- [Stalkr Official Site](https://github.com/getstalkr/getstalkr.github.io) 
source code is licensed under the [MIT License]().

- Other stuff related to *Stalkr* itself - e.g. logo and visual identity - 
which are available in this repo are licensed under the [Creative Commons  Attribution-NonCommercial-NoDerivatives 4.0 International](http://creativecommons.org/licenses/by-nc-nd/4.0/) License.

- The *Download on the App Store* badge has *All Rights Reserved to Apple Inc*.

**All contributions are assumed to be also licensed under the same.**
