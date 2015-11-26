var q = require('queneau-buckets')()


var texts = require('./corpuses/TOC')
.concat(require('./corpuses/subtitles'))
.concat(require('./corpuses/marx'))
.concat(require('./corpuses/ts1989'))
q.seed(texts)

module.exports = function () {
  return [q.fill(5 + (~~Math.random() * 7)),
  q.fill(5 + (~~Math.random() * 12)),
  q.fill(5 + (~~Math.random() * 18)),
  q.fill(5 + (~~Math.random() * 15)),
  q.fill(5 + (~~Math.random() * 12)),
  q.fill(5 + (~~Math.random() * 7)),
  q.fill(5 + (~~Math.random() * 3))].join('. ')
}
