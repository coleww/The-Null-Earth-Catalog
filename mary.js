var pv = require('poetic-vomit')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
var pos = cp[2] // poetry
console.log('mary hear and in the clear')
  var pes = pick(pos, {count: 3})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .map(function (l) {return  pv(l)})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})


module.exports = function (num, cb) {

return pick(lines, {count: 5}).join(' ').split(' ').slice(0, num).join(' ')


}