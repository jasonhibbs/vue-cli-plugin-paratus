const filesToDelete = [
  'public/favicon.ico',
  'src/assets/logo.png',
  'src/views/About.vue',
  'src/components/HelloWorld.vue',
]

module.exports = (api, options) => {
  // add normalize
  api.extendPackage({
    dependencies: {
      'normalize.css': '*',
    },
  })
  api.injectImports(api.entryFile, `import 'normalize.css'`)

  // delete some files
  api.render((files) => {
    Object.keys(files)
      .filter((name) => filesToDelete.indexOf(name) > -1)
      .forEach((name) => delete files[name])
  })

  // overwrite some files
  api.render('./template')
}

module.exports.hooks = (api) => {
  // assert entryFile as main.ts
  // https://github.com/vuejs/vue-cli/issues/3049
  api.entryFile = 'src/main.ts'

  // delint this one file to avoid a warning
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
