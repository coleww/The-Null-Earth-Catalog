var pv = require('poetic-vomit')
var wv = require('n-plus-7')
var tu = require('diacriticize')

var adjNoun = require('adj-noun')

var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('vails')
  var pos = cp[0] // poetry
  var pes = pick(pos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .map(function (l) { return pv(wv(pv(l, Math.random()), Math.random()))})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})


module.exports = function (num, cb) {

return tu(pick(lines, {count: 5}).join(' ').split(' ').slice(0, num).join(' '), Math.random() )


}