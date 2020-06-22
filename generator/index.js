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

  // overwrite some files
  api.render('./template')
}

module.exports.hooks = (api) => {
  // delete unused files
  api.render((files) => {
    Object.keys(files)
      .filter((name) => filesToDelete.indexOf(name) > -1)
      .forEach((name) => delete files[name])
  })

  // assert entryFile as main.ts
  // https://github.com/vuejs/vue-cli/issues/3049
  entryFile = 'src/main.ts'

  console.log(api.entryFile)

  // delint this one file to avoid a lint warning
  api.afterInvoke(() => {
    const fs = require('fs')
    const contentMain = fs.readFileSync(api.resolve(entryFile), {
      encoding: 'utf-8',
    })
    const lines = contentMain.replace(';', '').replace('(h)', 'h')
    fs.writeFileSync(entryFile, lines, {
      encoding: 'utf-8',
    })
  })
}
