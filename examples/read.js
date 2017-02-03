import wrap from '../build/';
import path from 'path';
import { readFile } from 'fs';

async function exampleRead() {
  console.log('allow me to introduce myself');
  console.log('');
  let raw = await wrap(readFile, path.resolve(__dirname, 'name.txt'))
  console.log(raw.toString());
  console.log('the wrapper');
}

exampleRead();

// => allow me to introduce myself
//
// => i am Chance
//
// => the wrapper
