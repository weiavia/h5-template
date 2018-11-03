const path = require('path')

const absoluteDir = function(dir) {
  return path.resolve(__dirname, dir)
}

const removeDir = function(dir) {

}

module.exports = {
  absoluteDir,
  removeDir
}