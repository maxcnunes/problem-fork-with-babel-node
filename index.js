var parent = require('./parent');

parent.run()
  .then(() => {
    console.log('Finished');
    process.exit();
  })
  .catch((err) => {
    console.error('Error', err);
    process.exit(1);
  });
