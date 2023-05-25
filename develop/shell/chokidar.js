const shelljs = require('shelljs')
const path = require('path')
const chokidar = require('chokidar');

const watch = async () => {
  const watchPath = path.join(__dirname, '../src/')
  const npmPath = path.join(__dirname, '../')
  shelljs.cd(npmPath)
  chokidar.watch(watchPath).on('change', (event, path) => {
    console.log(event, path);
    shelljs.exec(`npm run build`)
  });
}

const main = async () => {
    await watch()
}

main()