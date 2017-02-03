export default function wrap(fn, ...args) {
  return new Promise((resolve, reject) => {
    fn.apply(this, args, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
