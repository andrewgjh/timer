let args = process.argv.slice(2).sort((a, b) => a - b);
const timer = function(args) {
  for (let arg of args) {
    if (Number(arg) && Number(arg) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, arg * 1000);
    }
  }
};
timer(args);