import wrap from '../';

async function sayHiAfterASecond() {
  console.log('about to say hi');
  await wrap(setTimeout, () => { console.log('Hi') }, 1e3);
  console.log('i just said hi');
}

sayHiAfterASecond();

// => about to say hi
// => Hi
// => i just said hi
