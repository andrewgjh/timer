const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\x62') {
    process.stdout.write('\x07');
  }
  if (key === '\x31' || '\x32' || '\x33' || '\x34' || '\x35' || '\x36' || '\x37' || '\x38' || '\x39') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * Number(key))
  }

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
});


console.log('after callback');