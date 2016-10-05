problem-fork-with-babel-node
====================

The goal of this repository is only show some problems running a process fork with babel-node and maybe mocha.

## Running

The command below works ok. It only use babel-node to start the main script. This code does not depend on babel to run.

    npm run start:promise

The command below works ok. It only use babel-node to start the main script. This code depend on babel to run. Although the babel-node from the main script already handle the compile for the fork.

    npm run start:async

The command below does not work. It use babel-node to start the main script. This code does not depend on babel to run. But anyway it set `execPath: 'babel-node'` for the fork.

    npm run start:promise:fork-babel-node

The command below does not work. It use babel-node to start the main script. This code depend on babel to run. It set `execPath: 'babel-node'` for the fork.

    npm run start:async:fork-babel-node

## Testing

The command below works ok. It only use babel-node to start the main script. This code does not depend on babel to run.

    npm run test:promise

The command below does not work because mocha does not run the babel compile to the fork scripts.

    npm run test:async

The command below does not work.

    npm run test:promise:fork-babel-node

The command below does not work.

    npm run test:async:fork-babel-node
