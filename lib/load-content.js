var readCache = require("read-cache")

module.exports = function(filename) {
  return readCache.sync(filename, "utf-8")
}
