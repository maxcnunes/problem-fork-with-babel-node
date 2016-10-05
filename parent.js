const cp = require('child_process');

exports.run = () => {
  return new Promise((resolve) => {
    const type = process.argv
      .filter(arg => /^--type=/.test(arg))[0].replace('--type=', '');
    
    const enableForkWithBabelNode = !!process.argv
      .filter(arg => arg === '--fork-with-babel-node').length;

    const filename = `child-${type}.js`;
    const opts = {};
    if (enableForkWithBabelNode) {
      opts.execPath = 'babel-node';
    }

    console.log(
      enableForkWithBabelNode
      ? `Running fork ${filename} with babel-node through execPath`
      : `Running fork ${filename} without babel-node through execPath`
    );
    const n = cp.fork(`${__dirname}/${filename}`, [], opts);
    
    n.on('message', (m) => {
      console.log('PARENT got message:', m);
      resolve();
    });
    
    n.send({ hello: 'world' });
  });
};
