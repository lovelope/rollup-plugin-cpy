
/* eslint-disable no-console */
const cpy = require('cpy');
require('colors');

function success(name, src, dest) {
  console.log(`(${name}) '${src.green}' -> '${dest.green}' (${'\u2714'.green})`);
}

function fatal(name, src, dest, err) {
  console.error(`(${name}) '${src.red}' -> '${dest.red}' (${'\u2718'.red})`);
  console.error();
  console.error(`    ${err}`);
  process.exit(err.errno);
}

module.exports = function rollupPluginCpy(config = {}) {
  const {
    src = [], dest, options = {}, progress = true,
  } = config;
  const name = 'rollup-plugin-cpy';

  return {
    name,
    ongenerate: async () => {
      try {
        await cpy(src, dest, options).on('progress', (progressNow) => {
          if (progress) {
            const {
              completedFiles,
              totalFiles,
              completedSize,
            } = progressNow;
            console.info(`(${name}) '${completedFiles}' / '${totalFiles}' ${completedSize} done. (${'\u2714'.green})`);
          }
        });
        console.info(`[${name}]: all works done.`);
      } catch (error) {
        fatal(error);
      }
    },
  };
};
