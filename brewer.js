var wv = require('word-vomit')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
  console.log('brewin')
  var pos = cp[0] // poetry
  var pes = pick(pos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .map(function (l) {return wv(l)})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})

module.exports = function (num, cb) {


  return pick(lines, {count: 5}).join(' ')


}