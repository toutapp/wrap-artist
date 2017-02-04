# wrap-artist

A node module to wrap node style async callbacks in Promises to work with async/await

## Installation

```
npm install wrap-artist
```

## Example

```js
import wrap from '../build/';
import path from 'path';
import { readFile } from 'fs';

async function exampleRead() {
  console.log('allow me to introduce myself');
  console.log('');
  let raw = await wrap(readFile, path.resolve(__dirname, 'name.txt'));
  console.log(raw.toString());
  console.log('the wrapper');
}

exampleRead();

// => allow me to introduce myself
//
// => i am Chance
//
// => the wrapper
```

Build:

```
npm run examples
```

Run:

```
node built-examples/{example-name}.js
```

## Developing

Make sure to run `npm i` to install the dependencies

Build:

```shell
npm run build
```

## Testing

Run `npm test` from the module root
