var q = require('queneau-buckets')()
q.seed(require('./corpuses/TOC'))

module.exports = function () {
  return [1, 2, 3, 4, 5, 6, 7].map(function () {
    var sec = q.fill(~~(Math.random() * 3) + 2)
    console.log(sec)
    return sec.toUpperCase()
  })
}
