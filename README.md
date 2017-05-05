# RepStr

[![npm](https://img.shields.io/npm/v/repstr.svg?style=flat-square)](https://www.npmjs.com/package/repstr)
[![npm](https://img.shields.io/npm/dt/repstr.svg?style=flat-square)](https://www.npmjs.com/package/repstr)

Replace in a template string all values provided in an object

## Installation

Use [NPM](https://www.npmjs.com/package/repstr) to install **RepStr**:

```
npm install repstr
```

## Usage

```javascript
//Import dependencies 
var rep_str = require('repstr');

//Compile the template string
var str = rep_str('My car is {color}', { color: 'blue'});

//Display in console
console.log(str); //-> My car is blue
```

## API

### rep_str(str, obj [, prefix][, suffix])

Return a new string. Accepts the following arguments:

- `str`: template string.
- `obj`: an object with all the keys to be replaced in your template string. 
- `prefix` **(optionally)**: a string with the prefix of the template variable. Default value is `{`.
- `suffix` **(optionally)**: a string with the suffix of the template variable. Default value is `}`.

## License

Under the [MIT LICENSE](LICENSE).
