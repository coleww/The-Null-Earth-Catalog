var q = require('queneau-buckets')()
q.seed(fs.readFileSync('./corpuses/subtitles').toString().split('\n'))

module.exports = function () {
  return q.fill(~~(Math.random() * 3)).toUpperCase()
}
