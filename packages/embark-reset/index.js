/* global exports process require */

require('colors');
const {join} = require('path');
const {promisify} = require('util');
const rimraf = promisify(require('rimraf'));

const dappPath = process.env.DAPP_PATH || process.cwd();

exports.paths = new Set([
  '.embark',
  'chains.json',
  'coverage',
  'dist',
  'embarkArtifacts',
  'node_modules/.cache'
]);

exports.reset = async ({
  doneMessage = 'reset done!'.green,
  removePaths = exports.paths
} = {}) => {
  await Promise.all(
    [...removePaths].map(relative => rimraf(join(dappPath, relative)))
  );
  console.log(doneMessage);
};
