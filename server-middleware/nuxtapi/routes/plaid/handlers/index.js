const fs = require('fs')
const path = require('path')

const compts = {}

for (const compt of getBaseRoutes()) {
  compts[`${compt}`] = require(`./${compt}`)
}

module.exports = { ...compts }

function getBaseRoutes () {
  const source = path.join(__dirname, '.')
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .filter(dirent => !(dirent.name.includes('index') || dirent.name.includes('spec')))
    .map(dirent => `${dirent.name.substring(0, (dirent.name.length - 3))}`)
}