var dia = require('diacriticize')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('get yr snake oil here!')
  var pos = cp[0] // poetry
  var sos = cp[3] // poetry
  var pes = pick(pos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
  var ses = pick(sos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = ses.concat(pes)
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})
                .map(function (l) {return dia(l.toUpperCase(), Math.random())})

module.exports = function (num, cb) {


return pick(lines, {count: 5}).join(' ').split(' ').slice(0, num).join(' ')



}