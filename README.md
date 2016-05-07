# RepStr

[![npm](https://img.shields.io/npm/v/repstr.svg?style=flat-square)](https://www.npmjs.com/package/repstr)
[![npm](https://img.shields.io/npm/dt/repstr.svg?style=flat-square)](https://www.npmjs.com/package/repstr)

Replace in a string all the values provided in an object

## Installation

Use [NPM](https://www.npmjs.com/package/repstr) to install **RepStr**:

```
npm install repstr
```

An then add it to your script file:

```javascript
var RepStr = require('repstr');
```

## Usage

```javascript
var my_str = RepStr(str, obj [, opt]);
```

- `str`: string to replace.
- `obj`: an object with all the keys to replace. For example, if you provide `{ key1: 'value1' }`, all occurrences of `key1` in your string will be replaced by `value1`.
- `opt` (optionally): an object with the options. **RepStr** admits the following options:
  - `prefix`: a prefix for the search.
	- `suffix`: a suffix for the search.

Example of use:

```javascript
var str = RepStr('My car is {color}', { color: 'blue'}, { prefix: '{', suffix: '}' });

console.log(str); //-> My car is blue 
```

## License

Under the [MIT LICENSE](LICENSE).
