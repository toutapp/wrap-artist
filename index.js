export default function wrap(fn, ...args) {
  if (typeof fn != 'function') throw new Error('wrap(...) requires a function to be passed in.');

  return new Promise((resolve, reject) => {
    fn.call(this, ...args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
