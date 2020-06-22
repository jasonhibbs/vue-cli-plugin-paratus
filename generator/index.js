const filesToDelete = [
  'public/favicon.ico',
  'src/assets/logo.png',
  'src/views/About.vue',
  'src/components/HelloWorld.vue',
]

module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'normalize.css': 'latest',
    },
  })
  api.injectImports(api.entryFile, `import 'normalize.css'`)
  api.render((files) => {
    Object.keys(files)
      .filter((name) => filesToDelete.indexOf(name) > -1)
      .forEach((name) => delete files[name])
  })
  api.render('./template')
}

module.exports.hooks = (api) => {
  api.afterInvoke(() => {
    const fs = require('fs')
    const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
      encoding: 'utf-8',
    })
    const lines = contentMain.replace(';', '').replace('(h)', 'h')
    fs.writeFileSync(api.entryFile, lines, {
      encoding: 'utf-8',
    })
  })
}
