var ns = require('new-slang')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('quack quack this is doanld on the lien')
  var pos = cp[4] // poetry
  var pes = pick(pos, {count: 2})//.reduce(function(a, b) {return a.concat(b)})
// GOTTA BATCH RENAME ALL THE FILES TO JUST WHATEVER WHO CARES?

  var lines = pes
                .reduce(function(a, b) {return a.concat(b)})
                .map(function (l) {return l.replace(/\'|\"|\:|\;|\<|\>|\.|\?|\!|\,|\@|\#|\$|\%|\^|\&|\*|\(|\)/g, '')})
                .map(function (l) {return ns(l, 1)})
                .filter(function (x){ return !!proc(x)})
                .filter(function (x){ return !!x})

module.exports = function (num, cb) {


return pick(lines, {count: 5}).join(' ').split(' ').slice(0, num).join(' ')


}