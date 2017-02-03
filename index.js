export default function wrap(fn, ...args) {
  return new Promise((resolve, reject) => {
    fn.apply(this, args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
