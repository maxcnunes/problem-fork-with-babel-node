process.on('message', async (m) => {
  console.log('CHILD got message:', m);
  await asyncCall();
  console.log('CHILD done');
});

process.send({ foo: 'bar' });

function asyncCall () {
  return new Promise((resolve) => setTimeout(resolve, 1));
}
