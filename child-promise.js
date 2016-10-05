process.on('message', (m) => {
  console.log('CHILD got message:', m);
  asyncCall().then(() => console.log('CHILD done'));
});

process.send({ foo: 'bar' });

function asyncCall () {
  return new Promise((resolve) => setTimeout(resolve, 1));
}
