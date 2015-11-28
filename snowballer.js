var isSnowball = require('is-snowball')
var proc = require('./textProcessor')
var pick = require('pick-random')
var cp = require('./corpusMap')
console.log('gosh i hope it snows this winter...')
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
                .filter(function (l) {return isSnowball(l) || isSnowball(l, true)})


module.exports = function (num, cb) {



return pick(lines, {count: 3}).join(' ').split(' ').slice(0, num).join(' ')

}