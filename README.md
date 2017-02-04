# wrap-artist

A node module to wrap node style async callbacks in Promises to work with async/await

## Installation

```
npm install wrap-artist
```

## Example

```js
import wrap from 'wrap-artist';
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

You can also build and run the examples provided in the example dir by running the following commands:

- `npm run examples`
- `node built-examples/{example-name}.js`

## Developing

Make sure to run `npm i` to install the dependencies

Build:

```shell
npm run build
```

## Testing

Run `npm test` from the module root

## License

(The MIT License)

Copyright (c) 2017 ToutApp, Inc &lt;engineering@toutapp.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
