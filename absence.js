var lipogram = require('lipogram')
var markov = require('@coleww/markov')
var after = require('after')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')



module.exports = function (num, cb) {
  var m = markov(2)
  var pos = cp[0] // poetry
  var sos = cp[3] // poetry
  var lines = pick(pos, {count: 10})
                .reduce(function(a, b) {return a.concat(b)})
                .concat(pick(sos, {count: 10}).reduce(function(a, b) {return a.concat(b)}))
                .map(function (x) {var y = require(x); return y})
                .reduce(function(a, b) {return a.concat(b)})
                .filter(function (x){ return x})
                .map(function (l) {return l.replace(/\W/g, '')})
                .filter(function (x){ return proc(x)})

  var init = after(lines.length, function () {
    cb(m.fill(num).join(' '))
  })
  lines.forEach(function (line) {
    m.seed(line, init)
  })
}