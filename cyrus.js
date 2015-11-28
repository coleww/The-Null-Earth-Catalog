
var ns = require('new-slang')
var tu = require('to-unicode')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('cy cy')
  var pos = cp[0] // poetry
  var pes = pick(pos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .map(function (l) { return ns(ns(ns(l, Math.random()), Math.random()), Math.random())})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})


module.exports = function (num, cb) {

return tu(pick(lines, {count: 5}).join(' ').split(' ').slice(0, num).join(' '), pick(['circled', 'fullWidth', 'parenthesized', 'rockDots', 'smallCaps', 'stroked', 'inverted', 'reversed' ])[0] )


}