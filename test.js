var parent = require('./parent');

describe('test', function () {
  it('fork', async function () {
    await parent.run();
    console.log('test ok');
  });
});
