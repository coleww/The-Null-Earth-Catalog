var lipogram = require('lipogram')
var markov = require('@coleww/markov')
var after = require('after')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
var m = markov(1)

module.exports = function (num, cb) {

  var pos = cp[0] // poetry
  var sos = cp[3] // poetry
  var pes = pick(pos, {count: 10})//.reduce(function(a, b) {return a.concat(b)})
  var ses = pick(sos, {count: 10})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = ses.concat(pes)
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})
                console.log(lines.length, lines[500])
  var init = after(lines.length, function () {
    console.log('calling', m.pick())
    cb(m.fill(m.pick(), num).join(' '))
  })
  lines.forEach(function (line, i) {
    // console.log(i)
    m.seed(line, init)
  })
}