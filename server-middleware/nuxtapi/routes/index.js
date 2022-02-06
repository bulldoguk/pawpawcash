const fs = require('fs')
const path = require('path')

const routes = {}

for (const route of getBaseRoutes()) {
  routes[`${route}Routes`] = require(`./${route}`)
}

module.exports = { ...routes }

function getBaseRoutes () {
  const source = path.join(__dirname, '.')
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${dirent.name}`)
}