var q = require('queneau-buckets')()
q.seed(require('./corpuses/rando/subtitles'))

module.exports = function () {
  return q.fill(~~(Math.random() * 3) + 2).toUpperCase()
}
