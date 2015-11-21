var q = require('queneau-buckets')()
q.seed(fs.readFileSync('./corpuses/TOC').toString().split('\n'))

module.exports = function () {
  return [1, 2, 3, 4, 5, 6, 7].map(function () {
    return q.fill(~~(Math.random() * 3)).toUpperCase()
  })
}
