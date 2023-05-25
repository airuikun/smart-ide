const shelljs = require('shelljs')
const path = require('path')

const execute = async () => {
   const buildPath = path.join(__dirname, '../build/')
   const publicPath = path.join(__dirname, `../../vscode/media/build`)
   shelljs.exec(`rm -rf ${publicPath}/*`)
   shelljs.exec(`cp -R ${buildPath}. ${publicPath}/`)
}

const main = async () => {
    await execute()
}

main()