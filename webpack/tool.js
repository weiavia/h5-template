const path = require('path')

const absoluteDir = function(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  absoluteDir
}