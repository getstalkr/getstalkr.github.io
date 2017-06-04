// pug.js compiler.

// Intends to feed JSON data to pug.js templates.

'use strict'

const pug = require('pug')
const fs = require('fs')

const data = require('../../src/config.json')
const html = pug.compileFile('tasks/../src/templates/index.pug')(data)

fs.writeFile('tasks/../dist/index.html', html, (err) => {
  if (err)
    throw err
  else
    console.info('Rendering and Compiling pug.js files went OK.')
})
